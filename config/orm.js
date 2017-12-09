var connection = require("./connection.js");

//Shamelessly copied, there's no way I would have thought to program this myself
function printQuestionMarks(num) {
  var arr = [];

  for (var i = 0; i < num; i++) {
    arr.push("?");
  }

  return arr.toString();
}

var orm = {
	selectAll: function(table, cb){
		connection.query("SELECT * FROM ??", [table], function(err, data){
			if(err) throw err;
			cb(data);
		});
	},

	addNew: function(table, cols, vals, cb) {
    	var queryString = "";
    	queryString = "INSERT INTO " + table + " (" + cols.toString() + ") VALUES (" + printQuestionMarks(vals.length) + ") ";
    	connection.query(queryString, vals, function(err, data) {
      		if (err) throw err;
     		cb(data);
    	});
  	},

  	update: function(table, colsEqualVals, condition, cb) {
  		var queryString = "";
	    queryString = "UPDATE " + table + " SET ?? = ?, ?? = ?" + " WHERE " + condition;
	    connection.query(queryString, colsEqualVals, function(err, data) {
	    	if (err) throw err;
	    	cb(data);
	    });
  	}

}

module.exports = orm;