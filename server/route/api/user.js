// const User = require("../../models/Diary");
const bcrypt = require('bcryptjs')
// //POST users
// router.post('/', (req, res) => {
//     const { name, email, password } = req.body;
    
//     if (!name || !email || !password) return res.status(400).json({msg: 'Please enter all fields'});

//     User.findOne({ email })
//     .then(user => {
//         if(user) return res.status(400).json({msg: 'User already exists'});

//         const newUser = new User({
//             name, 
//             email,
//             password
//         });

//         //create salt & hash
//         bcrypt.genSalt(10, (err, salt) => {
//             bcrypt.hash(newUser.password, salt, (err, hash) => {
//                 if(err) throw err;
//                 newUser.password = hash;
//                 newUser.save()
//                 .then (user => {
//                     res.json({
//                         user: {
//                             id: user.id,
//                             name: user.name,
//                             email: user.email
//                         }
//                     })
//                 })
//             })
//         })
//     })
// });