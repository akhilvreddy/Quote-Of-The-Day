const express = require('express');
const { MessagingResponse } = require('twilio').twiml;

const app = express();

app.post('/sms', (req, res) => {
  const twiml = new MessagingResponse();

  twiml.message('HELLO');

  res.type('text/xml').send(twiml.toString());
});

app.listen(4000, () => {
  console.log('Express server listening on port 4000');
});

//twilio phone-numbers:update "+18556601642" --sms-url="http://localhost:1337/sms"

//(echo; echo 'eval "$(/opt/homebrew/bin/brew shellenv)"') >> /Users/akhilreddy/.zprofile
//    eval "$(/opt/homebrew/bin/brew shellenv)"