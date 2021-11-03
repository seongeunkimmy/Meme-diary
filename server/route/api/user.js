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
        if(user) return res.status(400).json({msg: 'This user is already existed'});

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

    
});

module.exports = router;