const express = require('express');
const router = express.Router(); 
const bcrypt = require('bcryptjs');
const config = require('config');
const jwt = require('jsonwebtoken');

const User = require("../../models/User");

// Register new user 

router.post('/', async (req, res) => {
    const {firstName, lastName, email, password} = req.body;

    //validation
    if(!firstName || !lastName || !email || !password) {
        return res.status(400).json({msg:'Please enter all fields'});
    }

    try {
        const user = await User.findOne({ email });
        if(user) throw Error('This user is already existed');

        const salt = await bcrypt.genSalt(10);
        if (!salt) throw Error('Something went wrong with bcrypt');

        const hash = await bcrypt.hash(password, salt);
        if (!hash) throw Error('Somthing went wrong with hashing the password');

        const newUser = new User({
            firstName, 
            lastName, 
            email,
            password: hash
        });

        const savedUser = await newUser.save();
        if (!savedUser) throw Error('This user is saved wrongly');

        const token = jwt.sign({ id: savedUser._id }, config.get('jwtSecret'), { expiresIn: 1800 });
        
        res.status(200).json({
            token, 
            user: {
                id: savedUser.id, 
                firstName: savedUser.firstName,
                lastName: savedUser.lastName,
                email: savedUser.email
            }
        });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }

    
    
    // //check if the user exists
    // User.findOne({email})
    // .then(user => {
    //     if(user) return res.status(400).json({msg: 'This user is alreay existed'});

    //     const newUser = new User({
    //         firstName,
    //         lastName,
    //         email,
    //         password
    //     })

    //     //salt & hash 
    //     bcrypt.genSalt(10, (err, salt) => {
    //         bcrypt.hash(newUser.password, salt, (err, hash) => {
    //             if(err) throw err;
    //             newUser.password = hash; 
    //             newUser.save()
    //             .then(user => {
                 
    //                 //verify the user with id
    //                 jwt.sign(
    //                     { id: user.id },
    //                     config.get('jwtSecret'),
    //                     { expiresIn : 1800 },
    //                     (err, token) => {
    //                         if(err) throw err; 
    //                         res.json({
    //                             token,
    //                             user: {
    //                                 _id: user.id, 
    //                                 firstName: user.firstName,
    //                                 lastName: user.lastName, 
    //                                 email: user.email
    //                             }
    //                         })
    //                     }
    //                 )

                  
    //             })
    //         })
    //     })
    // })
    
});

module.exports = router;