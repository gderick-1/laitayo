'use strict';
import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import * as nodemailer from 'nodemailer';
// import { Change } from 'firebase-functions';

// initialize firebase Admin SDK to access firebase Realtime Database
admin.initializeApp(functions.config().firebase);

// Take the text parameter passed to this HTTP endpoint and insert it into the
// Realtime Database under the path /messages/:pushId/original
exports.addMessage = functions.https.onRequest(async (req, res) => {
    // Grab the text parameter.
    const original = req.query.text;
    // Push the new message into the Realtime Database using the Firebase Admin SDK.
    const snapshot = await admin.database().ref('/booking').push({original: original});
    // Redirect with 303 SEE OTHER to the URL of the pushed object in the Firebase console index.js.
    res.redirect(303, snapshot.ref.toString());
  });


const gmailEmail = encodeURIComponent(functions.config().gmail.email);
const gmailPassword = encodeURIComponent(functions.config().gmail.password);
const mailTransport = nodemailer.createTransport(`smtps://${gmailEmail}:${gmailPassword}@smtp.gmail.com`);

//submit booking notice from booking components
exports.sendContactMessage = functions.database.ref('/booking/{pushKey}').onWrite((change) =>{
    const dataAfterChange = change.after.val();
    // only send emails for new messages
    if (change.before.val() || !dataAfterChange.name) {
        return;
    }

    const val = dataAfterChange;

    const mailOptions = {
        to: gmailEmail,
        from: `${val.email}`,
        subject: `Booking request from ${val.name}`,
        text:`Your message content here\n
             Subject: Booking request from ${val.name}\n
             Sender's Name: ${val.name} \n
             Content: ${val.message}.\n
             This tour will take place from 
             ${val.arrivalDate} to ${val.departureDate}\n
             for any clarification or cancellation of your booking call us through ${val.phone}`
    }
    return mailTransport.sendMail(mailOptions).then((snapshot) =>{
         
        console.log('Mail sent:', snapshot);
        return 1;
    }).catch( error => {
        console.error('Error:', error);
        return 1;
    });
});


// Take the text parameter passed to this HTTP endpoint and insert it into the
// Realtime Database under the path /messages/:pushId/original
exports.addMessage = functions.https.onRequest(async (req, res) => {
    // Grab the text parameter.
    const original = req.query.text;
    // Push the new message into the Realtime Database using the Firebase Admin SDK.
    const snapshot = await admin.database().ref('/users').push({original: original});
    // Redirect with 303 SEE OTHER to the URL of the pushed object in the Firebase console index.js.
    res.redirect(303, snapshot.ref.toString());
  });

// contact us for  detailed service worksheet
exports.sendContactMessage = functions.database.ref('/users/{pushKey}').onWrite((contact) =>{
    const dataAfterContact = contact.after.val();

    //only send emails for new messages
    if (contact.before.val() || !dataAfterContact.name) {
        return;
    }

    const cont = dataAfterContact;
    const mailOptions = {
        to: gmailEmail,
        from: `${cont.email}`,
        subject: `'Feedback from ${cont.name} '`,
        text: `Message content here\n
              Subject: Message from ${cont.name} \n
              Sender's Name: ${cont.name}\n
              Content: ${cont.message}`
    }
    return mailTransport.sendMail(mailOptions).then((snap) =>{
        
        console.log('feedback sent:', snap); 
        return 1;  
    }).catch(error =>{
        console.error('Error:', error);
        return 1;
    });
})
// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
