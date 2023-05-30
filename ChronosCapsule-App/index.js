var express = require('./node_modules/express');
var app = express();
app.use(express.static('src'));
app.get('/', function (req, res) {
  res.render('index.html');
});
app.listen(8080, function () {
  console.log('ChronosCapsule Dapp listening on port 8080!');
});