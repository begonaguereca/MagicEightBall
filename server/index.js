const express = require('express');
const bodyParser = require('body-parser');
const magicBall = require('./magicEightLogic.js');
const MessagingResponse = require('twilio').twiml.MessagingResponse;
var app = express();

app.use(express.static(__dirname + '/../react-client/dist'));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/magic', function (req, res) {
  const twiml = new MessagingResponse();
  let answer = magicBall.pickAnswer();

  twiml.message(answer);
  res.writeHead(200, {'Content-Type': 'text/xml'});
  res.end(twiml.toString());

});


app.listen(process.env.PORT || 3000, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});
