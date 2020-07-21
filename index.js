import express from 'express'

const app = express();
const apiRoutes from "./api-routes"

const port = process.env.PORT || 8080;

const bodyParser = require('body-parser')
const mongoose = require('mongoose');

app.use(bodyParser.urlencoded({
   extended: true
}));

app.use(bodyParser.json());
mongoose.connect("mongodb://localhost:27017/message-database", { 
	useNewUrlParser: true, 
	useUnifiedTopology: true, 
	useCreateIndex: true});
const db = mongoose.connection;


app.get('/', (req, res) => res.send('Hello World with Express'));
app.use('/api', apiRoutes)

app.listen(port, () => console.log("Hello Phu, Running with port:", port))