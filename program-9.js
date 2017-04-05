var http = require('http');
var urls = [
	process.argv[2],
	process.argv[3],
	process.argv[4]
];
var processCounter = 0;
var result = {};

urls.forEach(getServerResponse);

function processDataChunks(chunk, url){
	if(!result[url]){
		result[url] = [];
	}
	result[url].push(chunk);
};

function handleResponseEnd(){
	processCounter++;
	//start printing in the order of the url array
	if(processCounter === urls.length){
		urls.forEach((url) => {
			console.log(result[url].join(''));
		});
	}
};

function handleResponse(res, url){
	res.setEncoding('utf8');
	res.on('data', (data) => processDataChunks(data, url));
	res.on('end', handleResponseEnd);
};

function getServerResponse(url){
	http.get(url, (res) => handleResponse(res, url));
};


// var http = require('http')
//     var bl = require('bl')
//     var results = []
//     var count = 0
    
//     function printResults () {
//       for (var i = 0; i < 3; i++) {
//         console.log(results[i])
//       }
//     }
    
//     function httpGet (index) {
//       http.get(process.argv[2 + index], function (response) {
//         response.pipe(bl(function (err, data) {
//           if (err) {
//             return console.error(err)
//           }
    
//           results[index] = data.toString()
//           count++
    
//           if (count === 3) {
//             printResults()
//           }
//         }))
//       })
//     }
    
//     for (var i = 0; i < 3; i++) {
//       httpGet(i)
//     }


