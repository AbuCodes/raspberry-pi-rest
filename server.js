const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

app.use(express.static('public'));

app.use(express.json({ limit: '20kb' }));

app.use(function(req, res, next) {
  req.io = io;
  next();
});

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.get('/toggleLED', function(req, res) {
  var io = req.io;
  var state = req.body.state;
  io.emit('updateState', state);
  res.json({
    status: 'success',
    message: 'LED toggle emited!'
  });
});

io.on('connection', socket => {
  console.log('Client connected to server!');
});

http.listen(3000, function() {
  console.log('listening on *:3000');
});
