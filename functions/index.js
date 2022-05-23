const functions = require("firebase-functions");
const admin = require("firebase-admin");
exports.newUserSignup = functions.auth.user().onCreate(user => 
  {console.log("user created", user.email, user.uid);});
admin.initializeApp();

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
