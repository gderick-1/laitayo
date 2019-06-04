'use strict';
import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
// import * as SENDGRID_API_KEY from '../sendgrid.env';
// import * as nodemailer from 'nodemailer';


// initialize firebase Admin SDK to access firebase Realtime Database
admin.initializeApp(functions.config().firebase);

// var db = admin.firestore();

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

// sendgrid webhook implementation process.env.SENDGRID_API_KEY
// const apiKEY = require('../sendgrid.env');
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const gmailEmail = encodeURIComponent(functions.config().gmail.email);
// const gmailPassword = encodeURIComponent(functions.config().gmail.password);
// const mailTransport = nodemailer.createTransport(`smtps://${gmailEmail}:${gmailPassword}@smtp.gmail.com`);

// exports.sendBookingEmail = functions.firestore.document('/booking/{bookId}').onCreate( (snap)  =>{
//   const newData = snap.data();

//   const name = newData!.name;
//   const email = newData!.email;
//   const message = newData!.message;
//   const arrival = newData!.arrivalDate;
//   const depart = newData!.departureDate;
//   const phone = newData!.phone;
//   const kid = newData!.child;
//   const adult = newData!.adults;

//   const msg = {
//     to: gmailEmail,
//     from: `${email}`,
//     subject: `Booking request from ${name}`,
//     text: `Your message content here\n
//             Subject: Booking request from ${name}\n
//             Sender's Name: ${name} \n
//             Content: ${message}. \n\nWe expect to have ${adult} adult(s) and ${kid} kid(s)\n
//             This tour will take place from 
//             ${arrival} to ${depart}\n
//             for any clarification or information regarding this booking call us through ${phone}`,
//     html: `'<strong>from ${arrival} to ${depart}</strong>'`,
//   };
//   sgMail.send(msg);
// });

// exports.sendContactMessage = functions.firestore.document('/users/{userId}').onCreate((snap, context) =>{
//   const contactData = snap.data();

//   const name = contactData!.name;
//   const email = contactData!.email;
//   const phone = contactData!.phone;
//   const message = contactData!.message;

//   const msg = {
//     to: gmailEmail,
//     from: email,
//     subject: `" contact from ${name}"`,
//     text: `${message}\n\n
//           Call: ${phone}`,
//   };
//   sgMail.send(msg);
// });

//submit booking notice from booking components
exports.sendContactMessage = functions.database.ref('/booking/{pushKey}').onWrite((change) =>{
    const newData = change.after.val();
    // only send emails for new messages
    if (change.before.val() || !newData.name) {
        return;
    }

    const val = newData;

    const name = val.name;
    const email = val.email;
    const message = val.message;
    const arrival = val.arrivalDate;
    const depart = val.departureDate;
    const phone = val.phone;
    const kid = val.child;
    const adult = val.adults;
  
    const msg = {
      to: gmailEmail,
      from: `${email}`,
      subject: `Booking request from ${name}`,
      text: `Your message content here\n
              Subject: Booking request from ${name}\n
              Sender's Name: ${name} \n
              Content: ${message}. \n\nWe expect to have ${adult} adult(s) and ${kid} kid(s)\n
              This tour will take place from 
              ${arrival} to ${depart}\n
              for any clarification or information regarding this booking call us through ${phone}`,
      html: `'<strong>from ${arrival} to ${depart}</strong>'`,
    };
    sgMail.send(msg);
      

    // const mailOptions = {
    //     to: `${val.email}`,
    //     from: gmailEmail,
    //     subject: `Booking request from ${val.name}`,
        // text:`Your message content here\n
        //      Subject: Booking request from ${val.name}\n
        //      Sender's Name: ${val.name} \n
        //      Content: ${val.message}.\n
        //      This tour will take place from 
        //      ${val.arrivalDate} to ${val.departureDate}\n
        //      for any clarification or cancellation of your booking call us through ${val.phone}`
    // }
    // return mailTransport.sendMail(mailOptions).then((snapshot) =>{
         
    //     console.log('Mail sent:', snapshot);
    //     return 1;
    // }).catch( error => {
    //     console.error('Error:', error);
    //     return 1;
    // });
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

// // contact us for  detailed service worksheet
exports.sendContactMessage = functions.database.ref('/users/{pushKey}').onWrite((contact) =>{
    const contactData = contact.after.val();

    //only send emails for new messages
    if (contact.before.val() || !contactData.name) {
        return;
    }

    const cont = contactData;
    
  const name = cont.name;
  const email = cont.email;
  const phone = cont.phone;
  const message = cont.message;

  const msg = {
    to: gmailEmail,
    from: email,
    subject: `" contact from ${name}"`,
    text: `${message}\n\n
          Call: ${phone}`,
  };
  sgMail.send(msg);
})
// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
