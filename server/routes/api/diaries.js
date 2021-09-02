const express = require("express");
const router = express.Router(); 
const Diary = require("../../models/diary");

router.route('/diaries/new').post((req, res) => {
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
    newDiary.save();
});

router.route('/diaries').get((req, res) => {
    Diary.find()
         .then(foundDiaries => res.json(foundDiaries))
})




module.exports = router; 