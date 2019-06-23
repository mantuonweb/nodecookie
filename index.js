let express = require('express');
let cookieParser = require('cookie-parser');
var cors = require('cors');
//setup express app 
let app = express()

app.use(cookieParser());
app.use(cors());

//basic route for homepage 
app.get('/', (req, res) => {
    res.send('welcome to express app');
});

//JSON object to be added to cookie 
let users = {
    name: "Ritik",
    Age: "18"
}

//Route for adding cookie 
app.get('/setuser', (req, res) => {
    res.cookie("userData", users);
    
    res.send('user data added to cookie');
});

//Iterate users data from cookie 
app.get('/getuser', (req, res) => {
    //shows all the cookies 
    res.send(req.cookies);
});
app.use(function(req, res, next) {
    res.writeHead(200, {
        'Set-Cookie': 'mycookie=test'
    });
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Origin', req.headers.origin);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept');
    next();
});
//server listens to port 3000 
app.listen(3002, (err) => {
    if (err)
        throw err;
    console.log('listening on port 3002');
}); 
