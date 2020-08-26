const express = require("express");
const router = express.Router();
const ProfileData = require('../../models/Profile.js');

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
    const query = { userID: req.body.userID };
    console.log(query);
    const update = {
        userID: req.body.userID,
        value: req.body.value,
        cash: req.body.cash,
    };
    const updatedStock = ProfileData.replaceOne(
        query, update, { upsert: true }
    );
    updatedStock
        .then(updatedStock => res.json(updatedStock))
        .catch(() =>
            res.status(404).json({
                notickersfound: 'Something Goofed. Sorry.'
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