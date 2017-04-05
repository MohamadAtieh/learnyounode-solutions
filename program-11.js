var http = require('http');
var fs = require('fs');

var port = Number(process.argv[2]);
var filePath = process.argv[3];

var server = http.createServer(function (req, res){
	//success
	res.writeHead(200, { 'content-type': 'text/plain' });

	var source = fs.createReadStream(filePath, 'utf-8');
	source.pipe(res);
});

server.listen(port);
