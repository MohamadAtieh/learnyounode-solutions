var net = require('net');

var port = Number(process.argv[2]);

var server = net.createServer(listener);

server.listen(port);

function listener(socket){
	var date = new Date();

	var day =  ('0' + date.getDate()).slice(-2);
	var month = ('0' + (date.getMonth()+1) ).slice(-2); //month starts from 0
	var hour = ('0' + date.getHours()).slice(-2);
	var minute = ('0' + date.getMinutes()).slice(-2);

	var data = date.getFullYear() + "-" + month + "-" + day
				+ " " + hour + ":" + minute;

	socket.end(data + "\n");
}

 // var net = require('net')
    
 //    function zeroFill (i) {
 //      return (i < 10 ? '0' : '') + i
 //    }
    
 //    function now () {
 //      var d = new Date()
 //      return d.getFullYear() + '-' +
 //        zeroFill(d.getMonth() + 1) + '-' +
 //        zeroFill(d.getDate()) + ' ' +
 //        zeroFill(d.getHours()) + ':' +
 //        zeroFill(d.getMinutes())
 //    }
    
 //    var server = net.createServer(function (socket) {
 //      socket.end(now() + '\n')
 //    })
    
 //    server.listen(Number(process.argv[2]))