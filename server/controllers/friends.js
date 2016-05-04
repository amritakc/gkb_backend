var mongoose = require('mongoose');
var Friend = mongoose.model('Friend');

module.exports = (function() {
  return {
    show: function(req, res) {
      Friend.find({}, function(err, results){
      	if(err) {
      		console.log(err);
      	} else {
      		res.json(results);
      	}
      });
    },

    post: function(req, res) {
      Friend.create(req.body, function(hello, results){
        if(hello) {
          console.log(hello);
        } else {
          res.json(results);
        }
      });
    }
  };
})();