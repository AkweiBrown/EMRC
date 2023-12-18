## Electronic Medical Record System (EMRS) API

This repository implements a backend REST API for an Electronic Medical Record System (EMRS) built using NodeJS, Express, and MongoDB. 

### Functionality:

- **Patient Registration:** Register new patients with unique IDs, names, contact information, and emergency contact details. (POST /api/patients)
- **Start Encounter:** Initiate a new encounter (visit) for a registered patient, specifying date, time, and type (Emergency, OPD, Specialist Care). (POST /api/patients/:patientId/encounters)
- **Submit Patient Vitals:** Record patient vitals data including blood pressure, temperature, pulse, and SPO2 for an existing encounter. (POST /api/patients/:patientId/vitals)
- **List Patients:** Retrieve a list of all registered patients. (GET /api/patients)
- **View Patient Details:** Fetch details for a specific patient, including encounters and vitals information. (GET /api/patients/:patientId)

### Technologies:

- NodeJS
- Express Framework
- Mongoose (MongoDB ODM)

### Installation:

1. Clone the repository.
2. Install dependencies: `npm install`
3. Configure `database.js` with your MongoDB connection details.
4. Start the server: `node server.js`

### API Endpoints:

| Endpoint | Method | Description |
|---|---|---|
| /api/patients | POST | Register a new patient. |
| /api/patients | GET | Get a list of all patients. |
| /api/patients/:patientId | GET | Get details for a specific patient. |
| /api/patients/:patientId/encounters | POST | Start a new encounter for a patient. |
| /api/patients/:patientId/vitals | POST | Submit patient vitals for an existing encounter. |

### Documentation:

Each endpoint is documented in its corresponding source code file with comments and examples.

### Further Development:

- Implement additional functionalities like searching patients, filtering encounters, viewing encounter details, etc.
- Enhance security with authentication and authorization mechanisms.
- Improve error handling and response messages.
- Develop unit and integration tests for API endpoints.

### Feedback and Contribution:

Feel free to contribute to this project by submitting pull requests with bug fixes, improvements, and new features.

I hope this README provides a clear overview of the EMRS API. Please let me know if you have any further questions or suggestions!
