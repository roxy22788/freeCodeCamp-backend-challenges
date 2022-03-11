var express = require('express');
var app = express();
var PORT = 8081;

app.get('/api/whoami', function(req, res){
  res.json({
    ipaddress: req.headers['x-forwarded-for'], 
    language: req.headers["accept-language"], 
    software: req.headers["user-agent"]
  })
});

var listener = app.listen(PORT, function () {
  console.log('Your app is listening on port ' + PORT);
});
