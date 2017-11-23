var static = require('node-static');

//
// Create a node-static server instance to serve the '/usr/local/src/secret' folder
//
var file = new static.Server('/usr/local/src/secret');

require('http').createServer(function (request, response) {
   request.addListener('end', function () {
       //
       // Serve files!
       //
       file.serve(request, response);
   }).resume();
}).listen(8030);