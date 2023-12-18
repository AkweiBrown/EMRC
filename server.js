// server.js

const express = require('express');
const mongoose = require('mongoose');

const app = express();

// Connect to MongoDB database
mongoose.connect('mongodb://localhost:27017/emrs', {useNewUrlParser: true, useUnifiedTopology: true}).then(() => {
  console.log('Connected to MongoDB');
})
.catch(err => {
  console.error('Error connecting to MongoDB:', err);
});

// Define patient schema
const patientSchema = new mongoose.Schema({
  patientId: { type: String, required: true, unique: true },
  surname: { type: String, required: true },
   // other patient details
}
);

// Create patient model
const Patient = mongoose.model('Patient', patientSchema);

// Start server
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});

// Define routes for your API endpoints (e.g., register patient, list patients, etc.)

