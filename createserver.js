var http = require('http');
var fs = require('fs');


var requestHandeller = function(req,res) {
	var path = "."+req.url
	console.log(req.socket.remoteAddress,"  ",req.url);
	if(path=="./")
		path = "./index.html"
	fs.readFile(path,function(err,data){
		if(!err)
			res.write(data);
		else
			res.write("<html><h1>this file is not present</h1></html>")
	res.end();
	});
	
}


http.createServer(requestHandeller).listen(1234);
console.log('connecting........')