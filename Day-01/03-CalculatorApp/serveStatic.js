var	fs = require("fs"),
	path = require("path");

var staticFileExtensions = [".html",".txt",".css",".js",".ico",".jpg",".xml",".json"];

function isStaticResource(resourcePath){
	var extn = path.extname(resourcePath);
	return staticFileExtensions.indexOf(extn) !== -1;
}

function serveStatic(req,res){
	if (isStaticResource(req.url)){
		var resourcePath = path.join(__dirname , req.url);
		if (fs.existsSync(resourcePath)){
			/*fs.readFile(resourcePath, {encoding : "utf8"}, function(err,data){
				if (!err){
					res.write(data);
					res.end();
					return;
				}
				res.statusCode = 500;
				res.end();
			})*/
			
			var stream = fs.createReadStream(resourcePath, {encoding : "utf8"});
			/*stream.on("data", function(data){
				res.write(data);
			});
			stream.on("end", function(){
				res.end();
			});
			stream.on("error", function(){
				res.statusCode = 500;
				res.end();
			});*/
			stream.on("end", function(){
				console.log("Reading done by the stream");
			});
			stream.pipe(res);
			

		} else {
			res.statusCode = 404;
			res.end();
		}
	}
}

module.exports = serveStatic;