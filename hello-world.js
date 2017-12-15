express = require('express');

var portno = process.argv[2];
var app = express();
app.get('/home', function(req, res) {
	res.end('Hello World!')
})
app.listen(portno)
