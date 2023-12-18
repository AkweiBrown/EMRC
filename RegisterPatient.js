app.post('/api/patients', async (req, res) => {
  const { patientId, surname, otherNames, } = req.body;

  // Validate data
  if (!patientId || !surname) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  // Check if patient already exists
  const existingPatient = await Patient.findById(patientId);
  if (existingPatient) {
    return res.status(409).json({ message: 'Patient already exists' });
  }

  // Create new patient document
  const newPatient = new Patient({
    patientId, surname, otherNames, ...
  });

  await newPatient.save();

  res.json({ message: 'Patient registered successfully', patientId });
});

