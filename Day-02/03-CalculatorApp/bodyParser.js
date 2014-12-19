var qs = require("querystring");
module.exports = function(req,res,next){
	var dataAsString = '';
	req.on("data", function(data){
		dataAsString += data;
	});
	req.on("end", function(){
		req.body = qs.parse(dataAsString);
		console.log(dataAsString);
		console.log("Request body = ", req.body);
		next();
	});
}