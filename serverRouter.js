var http = require("http");
var url = require("url");

var serverRouter = function(router) {
	http.createServer(function(request, response){
		console.time("test time 1");
		console.log("request.url - ",request.url);
		let path = url.parse(request.url).pathname;
		console.log(path);
		console.trace("trace");
		router(path);
		console.time("test time 2");
		response.writeHead(200, 
		{
			"Content-Type": "text/plain"
		});
		response.write("jiakang.peng is a bad person");
		response.end();
		
		console.timeEnd("test time 1")
		console.timeEnd("test time 2")
	}).listen("8888");
	console.log("project started");
}

exports.start = serverRouter;
