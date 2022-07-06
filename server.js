const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');
const app = express();
require('dotenv').config();


//middleware
app.use(cors());
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//db config

const db = process.env.MONGO_URI;


//connect to mongoDB
mongoose
.connect(db)
.then(() => console.log('mongoDB is connected'))
.catch(err => console.log(err))

//routes
app.use('/api/diary', require('./route/api/diary'))
app.use('/api/user', require('./route/api/user'))
app.use('/api/auth', require('./route/api/auth'))



if(process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

//port 
const port = process.env.PORT || 5000; 
app.listen( port, () => {
    console.log(`Server is runnng on port ${port}`)
})