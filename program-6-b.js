var fileReader = require('./program-6-a');

var dirName = process.argv[2];
var extension = process.argv[3];

fileReader(dirName, extension, function(err, targetFiles){
	if(err) return console.error('Oops! ERROR', err);
	targetFiles.forEach(function(file){
		console.log(file);
	});
});