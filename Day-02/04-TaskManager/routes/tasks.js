var express = require('express');
var router = express.Router();

var tasks = {
		list : [
			
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
	var newId = tasks.list.reduce(function(seed, task){ return seed > task.id ? seed : task.id; }, 0) + 1;
	var newTask = {
		id : newId,
		name : taskName,
		isCompleted : false
	};
	tasks.list.push(newTask);
	res.redirect("/tasks");
});

router.get("/toggle/:id", function (req,res){
	var taskId = req.param("id");
	var id = parseInt(taskId,10);
	var task = tasks.list.filter(function(task){ return task.id === id;})[0];
	if (task) task.isCompleted = !task.isCompleted;
	res.redirect("/tasks");
})

router.get("/removeCompleted", function(req,res){
	var tasksToRemove = tasks.list.filter(function(task){ return task.isCompleted});
	res.render("tasks/confirmRemoval", {list : tasksToRemove});
});

router.post("/removeCompleted", function(req,res){
	tasks.list = tasks.list.filter(function(task){ return !task.isCompleted; });
	res.redirect("/tasks");
});

router.get("/api/tasks", function(req,res){
	res.json(tasks);
});


module.exports = router;