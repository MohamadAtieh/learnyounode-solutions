var fs = require('fs');

var textBuffer = fs.readFileSync(process.argv[2], 'utf8');

var arr = textBuffer.split('\n');

console.log(arr.length-1);
