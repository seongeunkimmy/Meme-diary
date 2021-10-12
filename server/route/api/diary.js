const express = require('express');
const router = express.Router(); 
const auth = require('../../middleware/auth');

//diary Model
const Diary = require("../../models/Diary");


//POST new diary
router.post('/', auth, (req, res) => {
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
         .then(diaries => res.json(diaries))
})

//DELETE diary

router.delete('/:id', auth, (req, res) => {
    const id = req.params.id; 
    Diary.findById(id)
       .then(diary => diary.remove().then(() => res.json({success: true})))
       .catch(err => res.status(404).json({success: false}))
})
  

module.exports = router; 