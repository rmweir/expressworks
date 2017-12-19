var express = require('express');
var app = express();

app.get('/search', function (request, response) {
	var search = request.query;
	response.send(search);
});

app.listen(process.argv[2]);
