var express = require('express');
var fs = require('fs');
var app = express();

app.get('/books', function(request, response) { 
	fs.readFile(process.argv[3], function(err, content) {
		if(err){}
		response.json(JSON.parse(content.toString()));
	});
});

app.listen(process.argv[2]);
