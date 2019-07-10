const sgMail = require('@sendgrid/mail');
const sendgridAPIKey = "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";

//let the sengrid module know that we want to work with this api

sgMail.setApiKey(sendgridAPIKey); //Sendgrid will this is associated with our account

//Sending individual email
// sgMail.send({
//     to: 'e.tweneboah1@gmail.com',
//     from: 'e.tweneboah1@gmail.com',
//     subject: "This is my first Developer journey",
//     text: 'MERN Journey'
// });

//We have to create a function that will call this email so that we can send message the user base on his actions. We have to call this email function in our routes

const sendWelcomeEmail = (email, name) => {
   sgMail.send({
    to: email,
    from: 'e.tweneboah1@gmail.com',
    subject: 'Thanks for joining in',
    text: `Welcome to the app, ${name}. let me know how to get alone with the app`
   })
};

module.exports = {
 sendWelcomeEmail
}



