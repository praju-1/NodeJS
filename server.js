const http = require('http');
const uc = require('uppercase')

// Creating our own server
http.createServer((req, res) => {
    // res.write(uc("Hello World..!"))
    // res.end()
    

    // meta for output
    res.writeHead(200, {'content-type' : 'text/html'});

    res.end(uc('<h3>Hello world..!</h3>'))
 
}).listen(5000);
 