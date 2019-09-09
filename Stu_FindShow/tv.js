var axios = require("axios");
var fs = require("fs");



var TV = function() {
    this.findShow = function(show) {
      // The following URL can be used to search the TV Maze API for a given show
      var URL = "http://api.tvmaze.com/singlesearch/shows?q=" + show;
  axios.get(URL).then(function(response) {
      console.log(response.data);
  })
    };
  };
  
  module.exports = TV;
  