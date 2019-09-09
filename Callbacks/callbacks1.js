// var fs = require("fs");

// // Write a function that logs a message, then executes
// // a function argument.
// function logger(message, cb) {
//     console.log(message);
//     if(cb) {
//         cb("weblogged your message")
//     }
// } 

// // Write a function that runs a function argument if
// // its other argument is truthy.
// function dumb(arg1, cb) {
//     if (arg1) {
//         if (cb){
//             cb();
//         }
//     }
// }
// // Write a function that accepts a function argument and
// // a value, and returns a function that returns the result
// // of executing the function argument with the value.
// // This isn't as hard as it sounds!
// function dumber(cb, value) {
//     return function() {
//         return cb(value);
//     }
// }
// // Use fs.writeFile to log a message to a file called
// // log.txt. Are yo using callbacks anywhere? Where?
// var cb = function(err) {
//     if (err) {
//         console.log("it's not wrong");
//     }
//     console.log("we got it write");
// }
// fs.writeFile('log.txt', 'my message', cb); 


var fs = require("fs");
fs.readFile("data.txt", "utf8", function(err, data) {
    var output = data.split(",");
    console.log(output);
});