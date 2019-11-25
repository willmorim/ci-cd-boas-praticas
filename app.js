const express = require("express");

const app = express();

app.get('/', (res, res )=> {
  res.send('ok');
})

app.listen(3000, () => console.log('RUNNING ON 3000'))