// require express so that we can build an express app
var express = require('express');
// require path so that we can use path stuff like path.join
var path = require('path');
var bodyParser = require('body-parser');
// instantiate the app
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



// set up a static file server that points to the "client" directory
app.use(express.static(path.join(__dirname, '../client/src/app')));
// app.use('/bower_components',  express.static(__dirname + '../client/vendor/assets/bower_components'));
app.listen(8000, function() {
  console.log('cool stuff on: 8000');
});
