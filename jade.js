var express = require('express');
var app = express();
var path = require('path');
var portno = process.argv[2];
app.set('views', path.join(__dirname, process.argv[3]));
app.set('view engine', 'jade');
app.get('/home', function(req, res) {
        res.render(process.argv[3], {date: new Date().toDateString()});
	
})
app.listen(portno);
