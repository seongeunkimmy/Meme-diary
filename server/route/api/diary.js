const express = require('express');
const router = express.Router(); 
const auth = require('../../middleware/auth');

//diary Model
const Diary = require("../../models/Diary");


//POST new diary
router.post('/', auth, async (req, res) => {
    const user_id = req.body.user_id;
    const title = req.body.title; 
    const content = req.body.content; 
    const date = req.body.date; 
    const selectedHeart = req.body.selectedHeart; 
    const bodyChecked = req.body.bodyChecked; 
    const newDiary = new Diary({
        user_id,
        title, 
        content, 
        date, 
        selectedHeart, 
        bodyChecked
    })
    console.log(newDiary)
    try {
        const diary = await newDiary.save();
        if(!diary) throw Error('Something went wrong saving the dairy')
        res.status(200).json(diary)
    } catch (err) {
        res.status(400).json({msg : err.message})
    }
 
});

//GET diaries
router.get('/:id', auth, async (req, res) => {
    try {
        const diaries = await Diary.find({user_id: req.params.id}).sort({ date: -1 });
        if(!diaries) throw Error ('No diaries');
        res.status(200).json(diaries)
    } catch (err) {
        res.status(400).json({msg: err.message})
    }
})

//DELETE diary

router.delete('/delete/:id', auth, async (req, res) => {
     try {
         const diary = await Diary.findById(req.params.id);
         if(!diary) throw Error('No diary found')

         const deleted = await diary.remove();
         if(!deleted) throw Error('Something went wrong while deleting the diary');
         res.status(200).json({success: true})
     } catch(err) {
         res.status(400).json({msg: err.message, success: false})
     }

});
  

module.exports = router; 