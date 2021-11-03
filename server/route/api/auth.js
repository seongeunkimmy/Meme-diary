const express = require('express');
const router = express.Router(); 
const bcrypt = require('bcryptjs');
const config = require('config');
const jwt = require('jsonwebtoken');
const auth = require('../../middleware/auth');
const dotenv = require('dotenv');

dotenv.config()

const User = require("../../models/User");

// Sign-in auth user 

router.post('/', async (req, res) => {
    const {email, password} = req.body;

    //validation
    if( !email || !password) {
        return res.status(400).json({msg:'Please enter all fields'})
    }

    try {
        const user = await User.findOne({ email });
        if (!user) return res.status(400).json({msg: 'This user is not existed'});

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({msg:'Invalid Password'})

        const token = jwt.sign({ id: user._id }, `${process.env.JWT_SECRET}`, { expiresIn : 1800 },);
        if (!token) throw Error('This token is not working');

        res.status(200).json({
            token, 
            user: {
                id: user._id,
                name: user.name, 
                email: user.email
            }
        });
    } catch (err) {
        res.status(400).json({ error: err.message })
    }
    
});


//get user data with token
router.get('/user', auth, async (req, res) => {
    try{
        const user = await User.findById(req.user.id).select('-password');
        if (!user) throw Error('This user is not existed');
        res.json(user);
    } catch(err) {
        res.status(400).json({ error: err.message });
    }
 
})

module.exports = router;