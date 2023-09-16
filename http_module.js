var http = require('http');


http.createServer(function (req, res) {
    // header format and meta for response
    res.writeHead(200, { 'Content-Type': 'text/html' });
    // to get url of request
    res.write(req.url);
    res.end();
}).listen(8080);
