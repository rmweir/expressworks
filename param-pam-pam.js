var express = require('express');
var app  = express();

app.put('/message/:id', function(request, response) {
	var result = require('crypto')
		.createHash('sha1')
      	        .update(new Date().toDateString() + request.params.id)
                .digest('hex');
	response.send(result);
});
app.listen(process.argv[2]);
