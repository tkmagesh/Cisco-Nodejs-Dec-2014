var http = require("http"),
	serveStatic = require("./serveStatic.js"),
	urlParser = require("./urlParser.js"),
	bodyParser = require("./bodyParser.js"),
	processCalculate = require("./processCalculate.js"),
	app = require("./app.js");

//Session Handling
app.use(function(req,res,next){
	/*var reqCookies = req.headers["cookie"];
	if (reqCookies){

	}
	res.setHeader("Set-Cookie", ["type=ninja", "language=javascript"]);*/
	next();
});
app.use(serveStatic);
app.use(urlParser);
app.use(bodyParser);
app.use(processCalculate);

var server = http.createServer(app.run);
server.listen(8080);
console.log("Server listening on port 8080");