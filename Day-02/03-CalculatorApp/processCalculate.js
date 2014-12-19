var	calculator = require("./calculator.js");


module.exports = function(req,res,next){
	if (req.pathname === "/calculate"){
		var reqData = req.method === "GET" ? req.query : req.body;
		var n1 = parseInt(reqData.number1,10),
			n2 = parseInt(reqData.number2,10),
			operation = reqData.operation;
		var result = calculator[operation](n1,n2);
		res.write(result.toString());
		res.end();
		next();
	}
}