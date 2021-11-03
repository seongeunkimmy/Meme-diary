const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
// const dotenv = require('dotenv');
const config = require('config');

//middleware
app.use(cors());
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//db config
// dotenv.config()
const db = config.get('mongoURI');


//connect to mongoDB
mongoose
.connect(db)
.then(() => console.log('mongoDB is connected'))
.catch(err => console.log(err))

//routes
app.use('/api/diary', require('./route/api/diary'))
app.use('/api/user', require('./route/api/user'))
app.use('/api/auth', require('./route/api/auth'))

app.get('/', function (req, res) {
    res.send("it's running")
})



const port = process.env.PORT || 5000; 
app.listen( port, () => {
    console.log(`Server is runnng on port ${port}`)
})