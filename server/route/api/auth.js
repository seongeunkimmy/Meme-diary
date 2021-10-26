const express = require('express');
const router = express.Router(); 
const bcrypt = require('bcryptjs');
const config = require('config');
const jwt = require('jsonwebtoken');
const auth = require('../../middleware/auth');

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
        if (!user) throw Error('This user is not existed');

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) throw Error('Invalid password');

        const token = jwt.sign({ id: user._id }, config.get('jwtSecret'), { expiresIn : 1800 },);
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
        res.status(400).json({ msg: err.message })
    }
       // //check for existing user
    // User.findOne({email})
    // .then(user => {
    //     if(!user) {
    //         return res.status(400).json({msg: 'This user is not existed'});
    //     }
       

    
    //     //validation
    //     bcrypt.compare(password, user.password)
    //     .then(isMatch => {
    //         if(!isMatch) return res.status(400).json({msg: 'Invalid password'})
    //     })

    //     jwt.sign(
    //         { id: user.id },
    //         config.get('jwtSecret'),
    //         { expiresIn : 1800 },
    //         (err, token) => {
    //             if(err) throw err; 
    //             res.json({
    //                 token,
    //                 user: {
    //                     _id: user.id, 
    //                     firstName: user.firstName,
    //                     lastName: user.lastName, 
    //                     email: user.email
    //                 }
    //             })
    //         }
    //     )
  
    
});


//get user data with token
router.get('/user', auth, async (req, res) => {
    try{
        const user = await User.findById(req.user.id).select('-password');
        if (!user) throw Error('This user is not existed');
        res.json(user);
    } catch(err) {
        res.status(400).json({ msg: err.message });
    }
    // User.findById(req.user.id)
    // .select('-password')
    // .then(user => res.json(user));
})

module.exports = router;