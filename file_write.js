const { log } = require('console');
var fs = require('fs');
const http = require('http');

// Creating own server
http.createServer((req, res) => {
    console.log("Server Created");

// Writing into files
console.log("\nWriting into Existing File");
fs.writeFile('input.txt', "Hello Good morning", (err) => {
    if (err) {
        return console.error(err);
    }

    console.log("\nData Written Successfully!");
    console.log("\nLet's read newly Written data");

    fs.readFile('input.txt', (err, data) => {
        if (err) {
            return console.error(err);
        }
        console.log("\nAsynchronous read : " + data.toString());
    });
});
}).listen(4000);


