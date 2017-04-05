var http = require('http');

var url = process.argv[2];

var words = [];

http.get(url, (res) => {
	res.setEncoding('utf8');
	res.on('data', (data) => {
		words.push(data);
	});
	res.on('end', () => {
		words = words.join('');
		console.log(words.length);
		console.log(words);
	});
});


// var http = require('http')
// var bl = require('bl')

// http.get(process.argv[2], function (response) {
//   response.pipe(bl(function (err, data) {
//     if (err) {
//       return console.error(err)
//     }
//     data = data.toString()
//     console.log(data.length)
//     console.log(data)
//   }))
// })
