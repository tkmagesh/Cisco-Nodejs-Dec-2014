var	fs = require("fs"),
	path = require("path");

var staticFileExtensions = [".html",".txt",".css",".js",".ico",".jpg",".xml",".json"];

function isStaticResource(resourcePath){
	var extn = path.extname(resourcePath);
	return staticFileExtensions.indexOf(extn) !== -1;
}

function serveStatic(req,res, next){
	if (isStaticResource(req.url)){
		var resourcePath = path.join(__dirname , req.url);
		if (fs.existsSync(resourcePath)){
			var stream = fs.createReadStream(resourcePath, {encoding : "utf8"});
			stream.pipe(res);
			next();			
		} else {
			res.statusCode = 404;
			res.end();
		}
	} else {
		next();
	}

}

module.exports = serveStatic;