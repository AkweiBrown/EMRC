const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Patient = require('./models/Patient'); // Make sure to import your Patient model

app.use(express.json());

app.post('/api/patients', async (req, res) => {
  try {
    const { patientId, surname, otherNames, /* ... */ } = req.body;

    // Validate data
    if (!patientId || !surname) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    // Check if patient already exists
    const existingPatient = await Patient.findOne({ patientId });
    if (existingPatient) {
      return res.status(409).json({ message: 'Patient already exists' });
    }

    // Create a new patient document
    const newPatient = new Patient({
      patientId,
      surname,
      otherNames,
      // ... other properties from req.body
    });

    await newPatient.save();

    res.json({ message: 'Patient registered successfully', patientId });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/your-database-name', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected to MongoDB');
    // Start the server
    const port = process.env.PORT || 3000;
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((error) => console.error('Error connecting to MongoDB:', error));
