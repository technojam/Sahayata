const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const User = mongoose.model("User");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken')
const { JWT_SECRET } = require('../keys')



router.post("/signup", (req, res) => {
    const { name, email, password } = req.body;
    if (!email || !password || !name) {
        return res.status(422).json({ error: "Please add all the field" });
    }
    User.findOne({ email: email })
        .then((saveduser) => {
            if (saveduser) {
                return res.status(422)
                    .json({ error: "user alredy exists with same email" });
            }
            bcrypt.hash(password, 12).then((hashedpassword) => {
                const user = new User({
                    email,
                    password: hashedpassword,
                    name
                });
                user.save()
            });
        })
        .catch((err) => {
            console.log(err);
        });
});



router.post('/signin', (req, res) => {
    const { email, password } = req.body
    if (!email || !password) {
        return res.status(422).json({ message: "add email and pass" })
    }
    User.findOne({ email: email })
        .then(saveduser => {
            if (!saveduser) {
                return res.status(422).json({ error: "invalid" })
            }
            bcrypt.compare(password, saveduser.password)
                .then(doMatch => {
                    if (doMatch) {

                        const token = jwt.sign({ _id: saveduser._id }, JWT_SECRET)
                        const { _id, name, email } = saveduser
                        res.json({ token, user: { _id, name, email } })
                    }
                    else {
                        return res.status(422).json({ error: "invalid" })
                    }
                })
                .catch(err => {
                    console.log(err)
                })
        }).catch(err => {
            console.log(err)
        })
})

module.exports = router;