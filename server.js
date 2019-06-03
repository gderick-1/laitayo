import { environment } from './src/environments/environment';

const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors')


let reporter = function (type, ...rest)
{
	// remote reporter logic goes here
};

/* handle an uncaught exception & exit the process */
process.on('uncaughtException', function (err)
{
	console.error((new Date).toUTCString() + ' uncaughtException:', err.message);
	console.error(err.stack);

	reporter("uncaughtException", (new Date).toUTCString(), err.message, err.stack);

	process.exit(1);
});

/* handle an unhandled promise rejection */
process.on('unhandledRejection', function (reason, promise)
{
	console.error('unhandled rejection:', reason.message || reason);

	reporter("uncaughtException", (new Date).toUTCString(), reason.message || reason);
})

const app = express();
const email = environment.details.email;
const pass = environment.details.pass;
const port = 3000;
const bodyParser = require('body-parser');

const transporter = nodemailer.createTransport({

  host: 'smtp.gmail.com',
  provider: 'gmail',
  port: 465,
  secure: true,
  auth: {
    user: email, // Enter here email address from which you want to send emails
    pass: pass // Enter here password for email account from which you want to send emails
  },
  tls: {
  rejectUnauthorized: true // since its port 465 ssl
  }
});

app.use(bodyParser.json());

const whitelist = ['http://localhost:3000/send']
var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}

// Then pass them to cors:
app.use(cors(corsOptions));
// app.use(function (req, res, next) {

//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });

app.post('/send', function (req, res) {

  let senderName = req.body.name;
  let senderEmail = req.body.email;
  let messageSubject = req.body.phone;
  let messageText = req.body.message;
  let arrival = req.body.arrivalDate;
  let departure = req.body.departureDate;
  let kid = req.body.child;
  let adult = req.body.adults;
//   let copyToSender = req.body.contactFormCopy;

  let mailOptions = {
    to: email, // Enter here the email address on which you want to send emails from your customers
    from: senderName,
    subject: messageSubject,
    text: `${messageText}\n
            we expect to be there from ${arrival} to ${departure}\n
            we have ${adult} adult(s) and ${kid} kid(s)`,
    replyTo: senderEmail
  };

  if (senderName === '') {
    res.status(400);
    res.send({
    message: 'Bad request'
    });
    return;
  }

  if (senderEmail === '') {
    res.status(400);
    res.send({
    message: 'Bad request'
    });
    return;
  }

  if (messageSubject === '') {
    res.status(400);
    res.send({
    message: 'Bad request'
    });
    return;
  }

  if (messageText === '') {
    res.status(400);
    res.send({
    message: 'Bad request'
    });
    return;
  }

//   if (copyToSender) {
//     mailOptions.to.push(senderEmail);
//   }

  transporter.sendMail(mailOptions, function (error, response) {
    if (error) {
      console.log(error);
      res.end('error');
    } else {
      console.log('Message sent: ', response);
      res.end('sent');
    }
  });
});

app.listen(port, function () {
  console.log('Express started on port: ', port);
});