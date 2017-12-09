var orm = require("../config/orm");

var burger = {
	selectAll: function(cb) {
    orm.selectAll("burgers", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  addNew: function(cols, vals, cb) {
    orm.addNew("burgers", cols, vals, function(res) {
      cb(res);
    });
  },
  update: function(colsEqualVals, condition, cb) {
    orm.update("burgers", colsEqualVals, condition, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller (catsController.js).
module.exports = burger;
