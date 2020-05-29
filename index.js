let express = require('express')

let app = express();
let apiRoutes = require("./api-routes")

var port = process.env.PORT || 8080;

let bodyParser = require('body-parser')
let mongoose = require('mongoose');

app.use(bodyParser.urlencoded({
   extended: true
}));

app.use(bodyParser.json());

mongoose.connect("mongodb://localhost:27017/message-database",  {
useUnifiedTopology: true,
useNewUrlParser: true,
});                                                                                                         ', { useNewUrlParser: true});
var db = mongoose.connection;


app.get('/', (req, res) => res.send('Hello World with Express'));
app.use('/api', apiRoutes)

app.listen(port, () => console.log("Running with port:", port))