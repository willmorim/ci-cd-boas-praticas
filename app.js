var express = require("express");

var app = express();

app.get('/', (res, res )=> {
  res.send('ok');
})

app.listen(3000, () => console.log('RUNNING ON 3000'))