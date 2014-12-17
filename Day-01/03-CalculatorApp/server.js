var http = require("http"),
	serveStatic = require("./serveStatic.js"),
	urlParser = require("./urlParser.js"),
	processCalculate = require("./processCalculate.js"),
	app = require("./app.js");

app.use(serveStatic);
app.use(urlParser);
app.use(processCalculate);

var server = http.createServer(app.run);
server.listen(8080);
console.log("Server listening on port 8080");