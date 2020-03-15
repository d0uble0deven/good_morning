// const https = require('follow-redirects').https;
// const fs = require('file-system');
require('dotenv').config();
let randomFn = require('./bowl');


// pull a random vibe and stick in to body: 


// twilio list of ingredients
// Twilio is an object
// process.env._ adds to object given by API
const Twilio = require('twilio')(
    process.env.TWILIO_ACCOUNT_SID,
    process.env.TWILIO_AUTH_TOKEN
);

// const rootURL = 'https://quotes.rest/qod?language=en';
// const header



// fetch data from quotes api
// return quote to `body` of twilio.messages.create()
// also parse through json object that api sends
// learn how to manage promises or async...await
// learn how to manage try...catch blocks
// decide if qotes need to be stored, if so, store them in a global array

// function quoteCall(rootURL) {
//     Request(rootURL, quote = JSON().parse(contents.quotes.quote)) => {
//         console.log(quote)
//         var sms = JSON.parse(quote)
//         console.log(sms)
//         return sms;
//     });

// }

// send a GET request to:
// http://quotes.rest/qod.json
// return just quote and author
// pass through to T.m.create()

// function to retrieve quote
// function get_quote_of_the_day() {
//     var xhttp = new XMLHttpRequest();
//     xhttp.onreadystatechange = function () {
//         if (this.readyState == 4 && this.status == 200) {
//             // Access the result here
//             alert(this.responseText);
//         }
//     };
//     xhttp.open("GET", "https://quotes.rest/qod?category=inspire", true);
//     xhttp.setRequestHeader("Content-type", "application/json");
//     xhttp.setRequestHeader("X-Theysaidso-Api-Secret", "YOUR API HERE");
//     xhttp.send();
// }

// get_quote_of_the_day()
//     .then((quote) => {
//         console.log(quote)
//         // where Twilio.messages.create() goes
//     })


// var options = {
//     'method': 'GET',
//     'hostname': 'https://quotes.rest',
//     'path': '/qod?category=%3Cstring%3E&language=en',
//     'headers': {
//     },
//     'maxRedirects': 20
// };
// var req = https.request(options, function (res) {
//     var chunks = [];

//     res.on("data", function (chunk) {
//         chunks.push(chunk);
//         console.log(chunks[0])
//     });

//     res.on("end", function (chunk) {
//         var body = Buffer.concat(chunks);
//         console.log(body.toString());
//     });

//     res.on("error", function (error) {
//         console.error(error);
//     });
// });

// req.end();



// messages is built-in attibute of twilio api
// create is method to create a new object that consists of from, to, body
// return promise and sends message & logs message


// is not accessing randomize funcion
randomFn.randomize().then((quote) => {

    // twilio recipe
    Twilio.messages.create({
        from: process.env.TWILIO_PHONE_NUMBER,
        to: process.env.CELL_PHONE_NUMBER,
        body: 'hello'
    })
        // twilio meal
        .then((message) => console.log(message.sid));


})





// from needs to be drawn in from DB
// body needs to be draw in from API