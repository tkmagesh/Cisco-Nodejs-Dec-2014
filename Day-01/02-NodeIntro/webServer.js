var http = require("http"),
	fs = require("fs"),
	path = require("path");

var server = http.createServer(function(req,res){
	console.log(res);
	var resourcePath = path.join(__dirname , (req.url === "/" ? "/index.html" : req.url));
	if (fs.existsSync(resourcePath)){
		fs.readFile(resourcePath, {encoding : "utf8"}, function(err,data){
			if (!err){
				res.write(data);
				res.end();
				return;
			}
			res.statusCode = 500;
			res.end();
		})
	} else {
		res.statusCode = 404;
		res.end();
	}
	res.end();
});
server.listen(8080);
console.log("Server listening on port 8080");