var express = require('express');
var app = express();

app.get('/', (req, res) => {
  var info = {
    ipaddress: null,
    language: null,
    software: null
  }

  info.ipaddress = req.headers['x-forwarded-for'] ||
           req.connection.remoteAddress ||
           req.socket.remoteAddress ||
           req.connection.socket.remoteAddress;

  info.software = req.headers['user-agent'].split(')')[0].split('(')[1];
  info.language = req.headers['accept-language'].split(',')[0];
  res.send(info);
});

app.listen(process.env.PORT || 3000)
