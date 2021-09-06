const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();

//middleware
app.use(cors());
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//db config
const db = require('./config/keys').mongoURI;
// const diary = require('./models/diary');

//connect to mongoDB
mongoose.connect(db)
.then(() => console.log('mongoDB is connected'))
.catch(err => console.log(err))

//routes
app.use('/', require('./routes'))

app.get('/', function (req, res) {
    res.send("it's running")
})

app.delete('/delete/:id', (req, res) => {
    const id = req.params.id; 
    Diary.findByIdAndDelete({_id: id}, (req, res, err) => {
        if(!err) {
           console.log('deleted');
        } else {
            console.log(err);
        }
     })
})

const PORT = 3001; 
app.listen(PORT, () => {
    console.log(`Server is runnng on port ${PORT}`)
})