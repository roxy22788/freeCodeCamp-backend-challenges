var express = require('express');
var app = express();
var PORT = 8081;

app.get('/api/:date?', function(req, res){
  let timestamp = req.params.date;

  if (!timestamp){
    let date = new Date();
    res.json({ unix: Date.parse(date), utc: date.toUTCString()});
  } else {
   if (timestamp.match(/\d{5,}/)){
      timestamp = +timestamp;
    }
    
    let date = new Date(timestamp);
    if (date.toUTCString() == 'Invalid Date'){
      res.json({error: date.toUTCString()});
    } else {
      res.json({ unix: date.valueOf(), utc: date.toUTCString() });
    }
  }
});

app.listen(PORT, () => {
  console.log('servidor iniciado com sucesso');
})