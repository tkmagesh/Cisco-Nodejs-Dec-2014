var middlewares = [];
module.exports =  {
	use : function(middleware){
		middlewares.push(middleware);
	},
	run : function(req,res){
			function invokeMiddlewares(req,res,middlewares){
				if (middlewares.length === 0) return;
			   var fn = middlewares[0];
			   var remaining = middlewares.slice(1);
			   var nextFn = function(){
			      invokeMiddlewares(req,res, remaining);
			   };
			   fn(req,res, nextFn);
			}
			invokeMiddlewares(req, res, middlewares);
	}
}