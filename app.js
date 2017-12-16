// var express = require('express');
// var app = express();
// app.listen(3000, function() {
//     console.log('connected 3000 port!');
// });

// var express = require('express');
// var app = express();
// app.get('/', function(req, res){
//     res.send('Hello home page');
// });
// app.listen(3000, function() {
//     console.log('connected 3000 port!');
// });

var express = require('express');
var app = express();
app.get('/', function(req, res){
  res.send('Hello home page');
});
app.get('/login', function(req, res){
  res.send('please login');
})
app.listen(3000, function() {
  console.log('connected 3000 port!');
});
