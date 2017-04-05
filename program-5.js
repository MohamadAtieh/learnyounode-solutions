//process.argv[2] - directory
//process.argv[3] - extension

var fs = require('fs');

function readDirCb(err, list){
	if(err) return console.log(err);
	for(var i = 0 ; i < list.length ; i++){
		if(list[i].endsWith('.'+process.argv[3])){
			console.log(list[i]);
		}
	}
}

// fs.readdir(process.argv[2], readDirCb);

//do it some other way


var path = require('path');

function listFileWithExtension(file){
	if(path.extname(file) == '.'+process.argv[3]){
		console.log(file);
	}
}

function readDirAltCb(err, list){
	if(err) return console.log(err);
	list.forEach(listFileWithExtension);
}

fs.readdir(process.argv[2], readDirAltCb);
