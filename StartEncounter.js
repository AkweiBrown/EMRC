app.post('/api/patients/:patientId/encounters', async (req, res) => {
  const patientId = req.params.patientId;
  const { date, type } = req.body;

  // Validate data
  if (!date || !type) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  // Find patient
  const patient = await Patient.findById(patientId);
  if (!patient) {
    return res.status(404).json({ message: 'Patient not found' });
  }

  // Create new encounter document
  const newEncounter = { date, type };

  // Add encounter to patient document
  patient.encounters.push(newEncounter);
  await patient.save();

  res.json({ message: 'Encounter started successfully', encounter: newEncounter });
});

