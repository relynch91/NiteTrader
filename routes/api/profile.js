const express = require("express");
const router = express.Router();
const Profile = require('../../models/Profile.js');

router.get("/test", (req, res) => res.json({
    msg: "This is the Profile route"
}));

router.post('/new', (req, res) => {
    const newProfile = new Profile({
        
    })
})

module.exports = router;