const http = require("http")
const routage = require("./routage")
var url = require('url');
var fs = require('fs');
var path = require('path');

let server =  http.createServer((req, res) => {

    /* fs.readFile('.' + req.url, function(err, data) {
        if (!err) {
            var dotoffset = req.url.lastIndexOf('.');
            var mimetype = dotoffset == -1
                            ? 'text/plain'
                            : {
                                '.html' : 'text/html',
                                '.ico' : 'image/x-icon',
                                '.jpg' : 'image/jpeg',
                                '.png' : 'image/png',
                                '.gif' : 'image/gif',
                                '.css' : 'text/css',
                                '.js' : 'text/javascript'
                                }[ req.url.substr(dotoffset) ];
            res.writeHeader(200, 'Content-type' , mimetype);
            res.end(data);
            console.log( req.url, mimetype );
        } else {
            console.log ('file not found: ' + req.url);
            res.writeHead(404, "Not Found");
            res.end();
        }
    }); */

    res.writeHead(200, {  "Content-Type": "text/html" })
    routage.dispatch(req, res)
    res.end()
})

server.listen(3000, () => {console.log("Server Start")})