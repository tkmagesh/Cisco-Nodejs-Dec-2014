var url = require("url");


module.exports = function(req,res){
	var urlObj = url.parse(req.url,true);
	for(var key in urlObj){
		req[key] = urlObj[key];
	}
}