const express = require("express");
const router = express.Router();
const bcrypt = require('bcryptjs');
const User = require('../../models/User');
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');
const passport = require('passport');
const validateRegisterInput = require('../../validation/register');
const validateLoginInput = require('../../validation/login');

router.get("/test", (req, res) => res.json({
    msg: "This is the users route"
}));

router.get('/current', passport.authenticate('jwt', { session: false }), (req, res) => {
    res.json({
        id: req.user.id,
        username: req.user.username,
        email: req.user.email
    });
})

router.post("/register", (req, res) => {

    let { isValid, errors } = validateRegisterInput(req.body);
    if (!isValid) {
        return res.status(400).json(errors);
    }

    User.findOne({
        username: req.body.username
    }).then(user => {
        if (user) {
            errors.username = "* This username is taken. *";
            return res.status(400).json(errors);
        } else {
            const newUser = new User({
                username: req.body.username,
                email: req.body.email,
                password: req.body.password
            });

            console.log(newUser);

            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(newUser.password, salt, (err, hash) => {
                    if (err) throw err;
                    newUser.password = hash;
                    newUser
                        .save()
                        .then(user => {
                            const payload = {
                                id: user.id,
                                username: user.username
                            };

                            jwt.sign(payload, keys.secretOrKey, {
                                expiresIn: 3600
                            }, (err, token) => {
                                res.json({
                                    success: true,
                                    token: "Bearer " + token
                                });
                            });
                        })
                        .catch(err => console.log(err));
                });
            });
        }
    });
});

router.post("/login", (req, res) => {
    const {
        errors,
        isValid
    } = validateLoginInput(req.body);

    if (!isValid) {
        return res.status(400).json(errors);
    }

    const username = req.body.username;
    const password = req.body.password;

    User.findOne({
        username
    }).then(user => {
        if (!user) {
            errors.username = "* This user does not exist. *";
            return res.status(400).json(errors);
        }

        bcrypt.compare(password, user.password).then(isMatch => {
            if (isMatch) {
                const payload = {
                    id: user.id,
                    username: user.username
                };

                jwt.sign(payload, keys.secretOrKey, {
                    expiresIn: 3600
                }, (err, token) => {
                    res.json({
                        success: true,
                        token: "Bearer " + token
                    });
                });
            } else {
                errors.password = "* Incorrect password. *";
                return res.status(400).json(errors);
            }
        });
    });
});

router.get('/finduser', function(req, res){
    User.find({username: req.body.username}, function(err, user){
        if(err){
            console.log(err);
        } else {
            res.json(user)
        }
    })
})

router.get('/allusernames', function(req, res) {

    User.find({}, { username: 1 } ).then(users => {
        // console.log(users.data);
        res.json(users);
    })
 
    .catch(errors => {
        res.json(errors);
    })
    

})

module.exports = router;