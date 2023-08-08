const http = require('http');
const uc = require('uppercase')

http.createServer((req, res) => {
    // res.write(uc("Hello World..!"))
    // res.end()
    res.writeHead(200, {'content-type' : 'text/html'});

    res.end(uc('<h3>Hello world..!</h3>'))
}).listen(5000);
 