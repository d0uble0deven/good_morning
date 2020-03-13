require('dotenv').config();

// twilio list of ingredients
var twilio = require('twilio')(
    process.env.TWILIO_ACCOUNT_SID,
    process.env.TWILIO_AUTH_TOKEN
);

// twilio recipe
twilio.messages.create({
    from: process.env.TWILIO_PHONE_NUMBER,
    to: process.env.CELL_PHONE_NUMBER,
    body: "Good morning!"
}).then((message) => console.log(message.sid)); // twilio meal


// from needs to be drawn in from DB
// body needs to be draw in from API