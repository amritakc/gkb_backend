  // This is our routes.js file located in /config/routes.js
  // This is where we will define all of our routing rules!
  // We will have to require this in the server.js file (and pass it app!)
  var friends = require('../server/controllers/friends.js');
  module.exports = function(app) {
    app.get('/friends', function(req, res) {
      friends.show(req, res);
    });

    app.post('/addFriend', function(req, res){
    	friends.post(req, res);
    });
  };