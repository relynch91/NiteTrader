const express = require("express");
const router = express.Router();
const ProfileData = require('../../models/Profile.js');

router.get("/test", (req, res) => res.json({
    msg: "This is the Profile route"
}));

router.post('/new', (req, res) => {
    const newProfile = new ProfileData({
        userID: req.body.userID,
        value: req.body.value,
        cash: req.body.cash
    })
    newProfile.save()
        .then(newProfile => res.json(newProfile))
        .catch((error) =>
            res.status().json(error)
        );
})

router.patch('/update', (req, res) => {
    ProfileData.updateOne(
        { userID: req.body.userID },
        { $inc: { value: req.body.value } },
        { upsert: true }
    ).then(updatedStock => res.json(updatedStock))
        .catch((error) =>
            res.status(404).json({
                noUsersFound: error
            })
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