
const fs = require('fs');
const http = require('http');

http.createServer((req, res) => {
    console.log("server Created");

getCurrentFilenames();
    // It checks the whether file is exist or not and return output in Boolean
    let fileExists = fs.existsSync('input.txt');
    console.log("input.txt exists:", fileExists);

    fileExists = fs.existsSync('file.txt');
    console.log("file.txt exists:", fileExists);

    // Function to get current filenames from directory
    function getCurrentFilenames() {
        console.log("\nCurrent filenames:");
            // __dirname if global object
        fs.readdirSync(__dirname).forEach(file => {
            console.log(file);
        });
        console.log("\n");
    }
}).listen(4000)