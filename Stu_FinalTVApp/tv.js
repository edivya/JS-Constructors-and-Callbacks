var axios = require("axios");
var fs = require("fs");

// Create the TV constructor
var TV = function() {
  // divider will be used as a spacer between the tv data we print in log.txt
  var divider = "\n------------------------------------------------------------\n\n";

  // findShow takes in the name of a tv show and searches the tvmaze API
  this.findShow = function(show) {
    var URL = "http://api.tvmaze.com/singlesearch/shows?q=" + show;

    axios.get(URL).then(function(response) {
      // Place the response.data into a variable, jsonData.
      var jsonData = response.data;

      // showData ends up being the string containing the show data we will print to the console
      var showData = [
        "Name: " + jsonData.name,
        "birthday: " + jsonData.birthday,
        "gender: " + jsonData.gender,
        "country: " + jsonData.country,
        "TV Maze URL: " + jsonData.TVMazeURL
      ].join("\n\n");

      // Append showData and the divider to log.txt, print showData to the console
      fs.appendFile("log.txt", showData + divider, function(err) {
        if (err) throw err;
        console.log(showData);
      });
    });
  };

  this.findActor = function(actor) {
    var URL = "http://api.tvmaze.com/search/people?q=" + actor;

    // Add code to search the TVMaze API for the given actor
    // The API will return an array containing multiple actors, just grab the first result
    // Append the actor's name, birthday, gender, country, and URL to the `log.txt` file
    // Print this information to the console
    axios.get(URL).then(function(response) {
        // Place the response.data into a variable, jsonData.
        var jsonData = response.data[0].person;

        console.log(jsonData);
  
        // showData ends up being the string containing the show data we will print to the console
        var showData = [
          "Name: " + jsonData.name,
          "birthday: " + jsonData.birthday,
          "gender: " + jsonData.gender,
          "country: " + jsonData.country,
          "TV Maze URL: " + jsonData.TVMazeURL
        ].join("\n\n");
  
        // Append showData and the divider to log.txt, print showData to the console
        fs.appendFile("log.txt", showData + divider, function(err) {
          if (err) throw err;
          console.log(showData);
        });
      });
    
  };
};

module.exports = TV;
