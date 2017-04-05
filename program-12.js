var http = require('http');
var port = Number(process.argv[2]);

var server = http.createServer(function(req, res){
	var body = '';
	if(req.method == 'POST'){
		req.on('data', function(data){
			body += data;
		});

		req.on('end', function(){
			res.writeHead(200, { 'content-type': 'text/plain' });
			res.end(body.toUpperCase());
		});
	}else{
		res.end("Not a POST request");
	}
});

server.listen(port);

// other solution

 // var http = require('http')
 //    var map = require('through2-map')
    
 //    var server = http.createServer(function (req, res) {
 //      if (req.method !== 'POST') {
 //        return res.end('send me a POST\n')
 //      }
    
 //      req.pipe(map(function (chunk) {
 //        return chunk.toString().toUpperCase()
 //      })).pipe(res)
 //    })
    
 //    server.listen(Number(process.argv[2]))