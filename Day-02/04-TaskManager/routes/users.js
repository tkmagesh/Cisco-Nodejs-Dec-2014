var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
  res.send('respond with a resource');
});

router.get("/list", function(req,res){
	res.send("List all the users here");
});

module.exports = router;
