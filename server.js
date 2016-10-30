var express           = require('express'),
    app               = express(),
    bodyParser        = require('body-parser'),
    mongoose          = require('mongoose'), 
    servercontroller  = require('./server/controllers/serverctrl');

mongoose.connect('mongodb://localhost:27017/pillayar');

app.use(bodyParser());

app.get('/', function (req, res) {
  res.sendfile(__dirname + '/client/views/index.html');
});
app.use('/js', express.static(__dirname + '/client/js'));
app.post('/api/user', servercontroller.create);
app.listen(3000, function() {
  console.log('I\'m Listening...');
})