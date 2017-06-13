let secrets = require('secrets');

let accountSid = secrets.accountSid;
let authToken = secrets.authToken;

let twilio = require('twilio');
let client = new twilio(accountSid, authToken);
let randomCode = Math.floor(1000 + Math.random() * 9000);

let sendSMS = function () {
    client.messages.create({
        body: 'Your code is ' + randomCode,
        to: '+19293442441',  // Text this number
        from: '+15207292514' // From a valid Twilio number
    })
        .then((message) => console.log(message.sid));
}

let sms =  {
    randomCode,
    sendSMS
}

module.exports = sms;