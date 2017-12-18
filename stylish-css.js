var express = require('express');
var app  = express();
var stylus = require('stylus');


app.use(express.static(process.argv[3]));
app.use(stylus.middleware(__dirname + process.argv[3]));

app.listen(process.argv[2]);
