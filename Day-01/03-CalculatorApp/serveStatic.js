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
	}
}

module.exports = serveStatic;