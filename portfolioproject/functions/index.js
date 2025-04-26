const functions = require('firebase-functions');
const app = require('./app'); // Import the Express app

// Export the Express app as a Firebase Function
exports.api = functions.https.onRequest(app);