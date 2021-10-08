const mongoose = require('mongoose');
const Schema = mongoose.Schema; 

const DiarySchema = new Schema({
    title: {
        type: String, 
    },
    content: {
        type: String
    },
    date: {
        type: Date
    },
    selectedHeart: {
        type: Number
    },
    bodyChecked: {
        type: String
    },
});


module.exports = Diary = mongoose.model('diary', DiarySchema)