import express from 'express'

let app = express();
let apiRoutes = require("./router/room.router")

var port = process.env.PORT || 3000;

let bodyParser = require('body-parser');
let mongoose = require('mongoose');


app.use(bodyParser.urlencoded({
   extended: true
}));

app.use(bodyParser.json());

const url = "mongodb+srv://phu1994:6298327@cluster0.rpsig.mongodb.net/message?retryWrites=true&w=majority"

mongoose.connect(url,{
   useCreateIndex: true,
   useNewUrlParser: true,
   useUnifiedTopology: true
});
var db = mongoose.connection;


app.get('/', (req, res) => res.send('Hello World with Express'));
app.use('/api', apiRoutes)

app.listen(port, () => console.log("Hello Phu, Running with port:", port))