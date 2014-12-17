var middlewares = [];
module.exports =  {
	use : function(middleware){
		middlewares.push(middleware);
	},
	run : function(req,res){
		for(var i=0;i<middlewares.length;i++)
			middlewares[i](req,res);
	}
}