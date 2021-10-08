const express = require('express');
const router = express.Router(); 
const auth = require('../../middleware/auth');

//diary Model
const Diary = require("../../models/Diary");


//POST new diary
router.post('/', (req, res) => {
    const title = req.body.title; 
    const content = req.body.content; 
    const date = req.body.date; 
    const selectedHeart = req.body.selectedHeart; 
    const bodyChecked = req.body.bodyChecked; 
    const newDiary = new Diary({
        title, 
        content, 
        date, 
        selectedHeart, 
        bodyChecked
    })
    console.log(newDiary)
    newDiary.save().then(diary => res.json(diary));
});

//GET diaries
router.get('/', (req, res) => {
    Diary.find()
         .then(foundDiaries => res.json(foundDiaries))
})

//DELETE diary

router.delete('/:id', (req, res) => {
    const id = req.params.id; 
    Diary.findByIdAndDelete({_id: id}, (req, res, err) => {
        if(!err) {
           console.log('deleted');
        } else {
            console.log(err);
        }
     })
})

module.exports = router; 