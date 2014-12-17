var fs = require("fs"),
	fileName = "sample.txt";

/*fs.readFile(fileName, {encoding : "utf8"}, function(err, fileContents){
	if (err){
		console.log(err);
		return;
	} 
	console.log(fileContents);
})
*/


var stream = fs.createReadStream(fileName, {encoding : "utf8"});
stream.on("data", function(data){
	console.log(data);
});
stream.on("end", function(){
	console.log("Thats all folks!");
});