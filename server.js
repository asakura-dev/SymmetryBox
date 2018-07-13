
var express = require('express');
var path = require('path');
var app = express();

var user = process.env.USER;
var pass = process.env.PASS;

app.set('port', process.env.PORT || 3000);

if (user && pass) {
  app.use(express.basicAuth(user, pass));
}

app.use(express.logger('dev'));
app.use(express.compress());
app.use(express.static(path.join(__dirname, 'dist')));
app.get('*', function(req, res) {
  res.sendfile('./dist/index.html');
});


app.listen(app.get('port'), function() {
  console.log('Server listening on port %s', app.get('port'));
});
