// Dependencies
const express = require('express');
const path = require('path');

const app = express();

app.get('/', function(req, res) {
	res.sendFile(path.join(__dirname+'/index.html'));
})

// Boilerplate code to start up the web server
const server = app.listen((process.env.PORT || 3000), (process.env.IP || '127.0.0.1'), function () {
  const host = server.address().address;
  const port = server.address().port;

  console.log('Web Server is listening at http://%s:%s', host, port);
});

// On browser
// http://127.0.0.1:3000/