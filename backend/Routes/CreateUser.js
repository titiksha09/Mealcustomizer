const express = require('express')
const router = express.Router()
const User = require('../models/User')
const { body, validationResult } = require('express-validator');

router.post("/createuser", [
    body('email').isEmail(),
    body('name').isLength({ min: 5 }),
    body('password','Incorrect Password').isLength({ min: 5 })]
    , async (req, res) => {

        const errors = validationResult(req);
        if(!errors.isEmpty()){
           return res.status(400).json({errors :errors.array()});
       }
        // if (!errors.isEmpty() && errors.errors[0].param === 'email') {
        //     return res.status(400).send('Invalid email address. Please try again.')
        // }
        // if (!errors.isEmpty() && errors.errors[0].param === 'password') {
        //     return res
        //         .status(400)
        //         .send('Password must be longer than 5 characters.')
        //     }
            try {
                await User.create({
                    name: req.body.name,
                    password: req.body.password,
                    height: req.body.height,
                    weight: req.body.weight,
                    gender: req.body.gender,
                    age: req.body.age,
                    email: req.body.email

                }).then(res.json({ success: true }));
            }
            catch (error) {
                console.log(error)
                res.json({ success: false });
            }
        
})

router.post('/login', [
    body('email', "Enter a Valid Email").isEmail(),
    body('password', "Password cannot be blank").exists(),
], async (req, res) => {
    // let success = false
    // const errors = validationResult(req);
    // if (!errors.isEmpty()) {
    //     return res.status(400).json({ errors: errors.array() })
    // }

    const { email, password } = req.body;
    try {
        let user = await User.findOne({ email });  //{email:email} === {email}
        if (!user) {
            return res.status(400).json({ success, error: "Try Logging in with correct credentials" });
        }

        //const pwdCompare = await bcrypt.compare(password, user.password); // this return true false.
        if (req.body.password !== user.password) {
            return res.status(400).json({ error: "Try Logging in with correct credentials" });
        }
        // const data = {
        //     user: {
        //         id: user.id
        //     }
        // }
        // success = true;
        // const authToken = jwt.sign(data, jwtSecret);
        // res.json({ success, authToken })

        return res.json({success:true})


    } catch (error) {
        console.error(error.message)
        res.send("Server Error")
    }
})

module.exports = router;