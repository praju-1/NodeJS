
var express = require('express')
var cookieParser = require('cookie-parser')

var app = express()
app.use(cookieParser())

app.get('/', function (req, res) {
  res.send("welcome to express app");
});

let users = {
  name : "John",
  Age : "21"
}

//Route for adding cookie
app.get('/setuser', (req, res)=>{
  res.cookie("userData", users);
  res.send('user data added to cookie');
  });
    
  //Iterate users data from cookie
  app.get('/getuser', (req, res)=>{
  //shows all the cookies
  res.send(req.cookies);
  });

app.listen(4000)