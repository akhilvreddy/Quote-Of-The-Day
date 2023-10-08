// Download the helper library from https://www.twilio.com/docs/node/install
// Find your Account SID and Auth Token at twilio.com/console
// and set the environment variables. See http://twil.io/secure
const accountSid = 'AC10fe88aec3f156f0bc460ddfa3ef7e04';
const authToken = '5953ba9ac38f1a1f1a941598a254b9de';
const client = require('twilio')(accountSid, authToken);

require('dotenv').config(); // Load environment variables from .env file


client.messages
  .create({
     body: 'This is a response',
     from: '+18556601642',
     to: '+17326667264'
   })
  .then(message => console.log(message.sid));