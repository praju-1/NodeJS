
const fs = require('fs');
const http = require('http');

http.createServer((req, res) => {
    console.log("server Created");

getCurrentFilenames();

    let fileExists = fs.existsSync('input.txt');
    console.log("input.txt exists:", fileExists);

    fileExists = fs.existsSync('file.txt');
    console.log("file.txt exists:", fileExists);

    // Function to get current filenames
    // in directory
    function getCurrentFilenames() {
        console.log("\nCurrent filenames:");
        fs.readdirSync(__dirname).forEach(file => {
            console.log(file);
        });
        console.log("\n");
    }

}).listen(4000)