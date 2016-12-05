var express = require('express');
var app = express();
app.get('/', function (req, res) {
    res.send('Hello world!');
});

app.get('/test', function(req, res) {
    res.sendfile('./views/test.html');
});


app.get('/output/simple.js', function(req, res) {
    res.sendfile('./output/simple.js');
});

app.listen(3000);
