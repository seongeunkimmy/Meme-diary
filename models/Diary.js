const mongoose = require('mongoose');
const Schema = mongoose.Schema; 
var ObjectId = mongoose.Schema.Types.ObjectId;

const DiarySchema = new Schema({
    user_id: {
      type: ObjectId,
      required: true
    },
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