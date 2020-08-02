'use strict';

var express = require('express');

var app = express();
var apiRoutes = require("./router/room.router");

var port = process.env.PORT || 3000;

var bodyParser = require('body-parser');
var mongoose = require('mongoose');

app.use(bodyParser.urlencoded({
   extended: true
}));

app.use(bodyParser.json());

var url = "mongodb+srv://phu1994:6298327@cluster0.rpsig.mongodb.net/message?retryWrites=true&w=majority";

mongoose.connect(url, {
   useCreateIndex: true,
   useNewUrlParser: true,
   useUnifiedTopology: true
});
var db = mongoose.connection;

app.get('/', function (req, res) {
   return res.send('Hello World with Express');
});
app.use('/api', apiRoutes);

app.listen(port, function () {
   return console.log("Running with port:", port);
});