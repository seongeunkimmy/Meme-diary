const express = require('express');
const router = express.Router(); 
const bcrypt = require('bcryptjs');
const config = require('config');
const jwt = require('jsonwebtoken');
const auth = require('../../middleware/auth');

const User = require("../../models/User");

// Sign-in auth user 

router.post('/', function (req, res) {
    const {email, password} = req.body;

    //validation
    if( !email || !password) {
        return res.status(400).json({msg:'Please enther the field'})
    }

    //check for existing user
    User.findOne({email})
    .then(user => {
        if(!user) return res.status(400).json({msg: 'This user is not existed'});

    
        //validation
        bcrypt.compare(password, user.password)
        .then(isMatch => {
            if(!isMatch) return res.status(400).json({msg: 'Invalid password'})
        })

        jwt.sign(
            { id: user.id },
            config.get('jwtSecret'),
            { expiresIn : 1800 },
            (err, token) => {
                if(err) throw err; 
                res.json({
                    token,
                    user: {
                        id: user.id, 
                        firstName: user.firstName,
                        lastName: user.lastName, 
                        email: user.email
                    }
                })
            }
        )
    })
    
});


//get user data with token
router.get('/user', auth, function(req, res) {
    User.findById(req.user.id)
    .select('-password')
    .then(user => res.json(user));
})

module.exports = router;