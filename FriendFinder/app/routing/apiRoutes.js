//dependecies

var path = require("path");




//===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================

var friends = require("../data/friends.js");



// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  // ---------------------------------------------------------------------------

  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });


  // API POST Requests
  // Below code handles when a user submits a form and thus submits data to the server.
  // In each of the below cases, when a user submits form data (a JSON object)
  // ...the JSON is pushed to the appropriate JavaScript array
  // (ex. User fills out a reservation request... this data is then sent to the server...
  // Then the server saves the data to the tableData array)
  // ---------------------------------------------------------------------------

  app.post("/api/friends", function(req, res) {
    
      res.json(friends);

      var userInput = req.body;
      console.log('userInput =' + JSON.stringify(userInput));
      var userResponses = userInput.scores;
      console.log('userResponses =' + userResponses;

      //Decide best friend match 

      var canidate = '';
      var canidateImage = '';
      var totalDifference = 10000;

  });
};

////////////////////////////////////////////////////


    // Examine all existing friends in the list
    for (var i = 0; i < friends.length; i++) {
      // console.log('friend = ' + JSON.stringify(friends[i]));

      // Compute differenes for each question
      var diff = 0;
      for (var j = 0; j < userResponses.length; j++) {
        diff += Math.abs(friends[i].scores[j] - userResponses[j]);
      }
      // console.log('diff = ' + diff);

      // If lowest difference, record the friend match
      if (diff < totalDifference) {
        // console.log('Closest match found = ' + diff);
        // console.log('Friend name = ' + friends[i].name);
        // console.log('Friend image = ' + friends[i].photo);

        totalDifference = diff;
        canidate = friends[i].name;
        canidateImage = friends[i].photo;
      }
    }

    // Add new user
    friends.push(userInput);

    // Send appropriate response
    res.json({status: 'OK', canidateName: canidateName, canidateImage: canidateImage});
  });
};