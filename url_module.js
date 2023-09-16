var url = require('url');
var adr = 'https://en.wikipedia.org/w/index.php?title=Talk:Main_Page&action=edit'

var q = url.parse(adr, true);

//returns 'en.wikipedia.org'
console.log("Hostname is : ", q.host); 

//returns ' /w/index.php'
console.log("Path of the file ", q.pathname); 

 //returns '?title=Talk:Main_Page&action=edit'
// perform searching in query
console.log(q.search);

//returns an object
var qdata = q.query; 

console.log(qdata.title); 