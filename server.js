// var http = require('http'),
//   fs = require('fs');
//
// http.createServer(function(request, response) {
//   response.writeHead(200, {
//     'Content-Type' : 'text/html',
//     'Access-Control-Allow-Origin' : '*'
//   });
//
//   var readStream = fs.createReadStream(__dirname + 'index.html');
//
//   readStream.pipe(response);
// }).listen(1337);
//
// console.log('Visit me at http://localhost:1337');

var express = require('express');
var app = express();
var path = require('path');

app.get('/', function (resquest, response) {
  response.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(1337);

var adminRouter = express.Router();

// Indique au serveur ce qu'on attend quand il se passe telle ou telle chose
adminRouter.get('/', function (request, response) {
  response.send('I\'m the dashboard !');
});

adminRouter.get('/users', function (request, response) {
  response.send('I show all the users !');
});

adminRouter.get('/posts', function (request, response) {
  response.send('I show all the posts !');
});

app.use('/admin', adminRouter);

adminRouter.get('/users/:name', function (request, response) {
  response.send('<b>' + 'Hello ' + request.params.name + '</b>');
});

console.log('1337 is the magic port');
