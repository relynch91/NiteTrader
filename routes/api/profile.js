const express = require("express");
const router = express.Router();
const ProfileData = require('../../models/Profile.js');

router.get("/test", (req, res) => res.json({
    msg: "This is the Profile route"
}));

router.post('/new', (req, res) => {
    const newProfile = new ProfileData({
        userID: req.body.userID,
        value: req.body.value
    })

    newProfile.save()
        .then(newProfile => res.json(newProfile))
        .catch((error) =>
            res.status().json(error)
        );
})

router.get('/:userID', (req, res) => {
    ProfileData.find({ userID: req.params.userID })
        .sort({ date: 1 })
        .then(profile => res.json(profile))
        .catch(err =>
            res.status(404).json({ profileNotFound: 'No data found from that user' }
            )
        );
})

module.exports = router;