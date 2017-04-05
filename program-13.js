var http = require('http');
var url = require('url');
var port = Number(process.argv[2]);

var API_PREFIX = '/api';

var server = http.createServer(function(req, res){
	if(req.method == 'GET'){
		handleGetRequest(req, res);
	}else{
		res.end('Request Method Not Supported');
	}
});

server.listen(port);

function handleGetRequest(req, res){
	var targetUrl = url.parse(req.url, true);
	var response;
	var date = new Date(targetUrl.query.iso);
		
	if(targetUrl.pathname === API_PREFIX + '/parsetime'){ //or use endsWith() or index['/parsetime'] 
		response = {
			hour: date.getHours(),
			minute: date.getMinutes(),
			second: date.getSeconds()
		};
	}else if(targetUrl.pathname === API_PREFIX + '/unixtime'){
		response = {
			unixtime: date.getTime()
		};
	}

	if(response){
		res.writeHead(200, { 'content-type': 'application/json' });
		res.end(JSON.stringify(response));
	}else{
		res.writeHead(404);
		res.end();
	}
}


//other solution

    // var http = require('http')
    // var url = require('url')
    
    // function parsetime (time) {
    //   return {
    //     hour: time.getHours(),
    //     minute: time.getMinutes(),
    //     second: time.getSeconds()
    //   }
    // }
    
    // function unixtime (time) {
    //   return { unixtime: time.getTime() }
    // }
    
    // var server = http.createServer(function (req, res) {
    //   var parsedUrl = url.parse(req.url, true)
    //   var time = new Date(parsedUrl.query.iso)
    //   var result
    
    //   if (/^\/api\/parsetime/.test(req.url)) {
    //     result = parsetime(time)
    //   } else if (/^\/api\/unixtime/.test(req.url)) {
    //     result = unixtime(time)
    //   }
    
    //   if (result) {
    //     res.writeHead(200, { 'Content-Type': 'application/json' })
    //     res.end(JSON.stringify(result))
    //   } else {
    //     res.writeHead(404)
    //     res.end()
    //   }
    // })
    // server.listen(Number(process.argv[2]))