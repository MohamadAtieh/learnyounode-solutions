var fs = require('fs');

var textFile = fs.readFile(process.argv[2], 'utf8', function(err, data){
	if(err){
		return console.log(err); //always return!
	}
	console.log(data.split('\n').length-1);
});