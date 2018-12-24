const express = require('express');
const bodyParser = require('body-parser');



// create express app
const app = express();


// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// enable cross orgin access
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });


// parse requests of content-type - application/json
app.use(bodyParser.json())

app.use(express.static('public'))



// Configuring the database
const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;


// Connecting to the database
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});

// define a simple route


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
});

app.get('/palindrome/:str', (req, res) => {
    var pstr = req.params.str
    var len = pstr.length;
    var mid = Math.floor(len/2);

    for ( var i = 0; i < mid; i++ ) {
        if (pstr[i] !== pstr[len - 1 - i]) {
            res.status(400).send({ message: 'invalid string supplied' });
        }
    }

   
    res.status(200).send({ message: 'given string is palindrome' });
});

      
       
     

// Require Msgs routes
require('./routes/msg.routes.js')(app);



// listen for requests
app.listen(80, () => {
    console.log("Server is listening on port 3000");
});