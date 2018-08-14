var http = require("http");
var url = require("url");

var serverRouter = function(router) {
	http.createServer(function(request, response){
		console.log("request.url - ",request.url);
		let path = url.parse(request.url).pathname;
		console.log(path);
		router(path);
		response.writeHead(200, 
		{
			"Content-Type": "text/plain"
		});
		response.write("jiakang.peng is a bad person");
		response.end();
	}).listen("8888");
	console.log("project started");
}

exports.start = serverRouter;