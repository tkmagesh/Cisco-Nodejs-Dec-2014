var url = require("url");


module.exports = function(req,res, next){
	var urlObj = url.parse(req.url,true);
	for(var key in urlObj){
		req[key] = urlObj[key];
	}
	next();
}