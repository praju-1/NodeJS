const fs = require('fs');
const http = require('http');

http.createServer((req, res)=>{
    console.log("server is created");

    // read file
    fs.readFile("index.html", (err,data)=>{
        res.writeHead(200,{'content-type':'text/html'});
        res.write(data);
        return res.end();
    })

    // append file
    fs.appendFile("index.html", '<h1>This is Appendfile </h1>', (err,data)=>{
        res.writeHead(200,{'content-type':'text/html'});
        if (err) throw err
        console.log('File updated')
        return res.end();
    })

    // Delete file
    fs.unlink('index.html', (err)=>{
        if(err) throw err
        console.log('File Deleted');
        return res.end()
    })

    //opening file
    fs.open('server.js', "r", (err)=>{
        if(err) throw err
        console.log('File opened');
        return res.end()
    })

}).listen(4000);