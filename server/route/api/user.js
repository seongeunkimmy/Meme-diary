const express = require('express');
const router = express.Router(); 

const User = require("../../models/User");

const bcrypt = require('bcryptjs')

router.post('/', (req, res) => {
    res.send('hey');
})

module.exports = router;