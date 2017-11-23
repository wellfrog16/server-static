var static = require('node-static');

//
// Create a node-static server instance to serve the '/usr/local/src/project' folder
//
var file = new static.Server('/usr/local/src/project');

require('http').createServer(function (request, response) {
   request.addListener('end', function () {
       //
       // Serve files!
       //
       file.serve(request, response);
   }).resume();
}).listen(8001);