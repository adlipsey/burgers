var express = require("express");
var router = express.Router();
var orm = require("../config/orm.js");

var burger = require("../models/burger.js");

//Routes
router.get("/", function(req, rsp){
	burger.selectAll(function(data){
		var burgerData = {burgers: data};
		//Send burgerData to views
		rsp.render("index", burgerData);
	});
});

router.post("/api/burgers", function(req, res) {
	burger.addNew(["burger_name"], [req.body.name], function(result) {
	    // Confirmation
		res.json({ id: result.insertId });
	});
});

router.put("/api/burgers/:id", function(req, res) {
  var condition = "id = " + req.params.id;
  burger.update(req.body.data, condition, function(result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

module.exports = router;