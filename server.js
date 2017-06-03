var express = require('express');
var app = express();

app.get('/', (req, res) => {
  console.log(req.headers);
  res.send(req.headers['x-forwarded-for'] ||
     req.connection.remoteAddress ||
     req.socket.remoteAddress ||
     req.connection.socket.remoteAddress);
});

app.listen(process.env.PORT || 3000)
