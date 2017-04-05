var fs = require('fs');
var path = require('path');

// Way 1

// function readDirCb(list, ext){
// 	var data = [];
// 	list.forEach(function (file){
// 		if(path.extname(file) == ext){
// 			data.push(file);
// 		}
// 	});
// 	return data;
// }

// module.exports = function(dirName, extension, cb){
// 	fs.readdir(dirName, function(err, list){
// 		if(err) return cb(err);
// 		var ext = '.'+extension;
// 		cb(null, readDirCb(list, ext));
// 	});
// }

// Way 2

module.exports = function(dirName, extension, cb){
	fs.readdir(dirName, function(err, list){
		if(err) return cb(err);
		
		var ext = '.'+extension;
		list = list.filter(function(file){
			return path.extname(file) === ext;
		});

		cb(null, list);
	});
}