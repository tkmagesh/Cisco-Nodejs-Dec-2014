var express = require('express');
var router = express.Router();

var tasks = {
		list : [
		"Explore JavaScript",
		"Master Node.js",
		"Practice Async Programming"
		]
	};

/* GET users listing. */
router.get('/', function(req, res) {
  res.render("tasks/index", tasks);
});

router.get("/add", function(req,res){
	res.render("tasks/add");
});

router.post("/add", function(req,res){
	var taskName = req.param("taskName");
	tasks.list.push(taskName);
	res.redirect("/tasks");
});

module.exports = router;