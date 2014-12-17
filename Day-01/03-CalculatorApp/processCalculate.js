var	calculator = require("./calculator.js");


module.exports = function(req,res){
	if (req.pathname === "/calculate"){
		var n1 = parseInt(req.query.number1,10),
			n2 = parseInt(req.query.number2,10),
			operation = req.query.operation;
		var result = calculator[operation](n1,n2);
		res.write(result.toString());
		res.end();
	}
}