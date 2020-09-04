const express = require("express");
const router = express.Router();
const ProfileData = require('../../models/Profile.js');

router.post('/new', (req, res) => {
    console.log(req.body);
    const newProfile = new ProfileData({
        userId: req.body.userId,
        value: req.body.value,
        cash: req.body.cash,
        date: req.body.date
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
        date: req.body.date
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
    ProfileData.findOne(
        { 
            $and: [
                { userID: { $eq: req.body.userID } },
                { date: { $eq: req.body.date}}
            ]
        })
        .then(query => res.json(query))
        .catch(err =>
            res.status(404).json({ profileNotFound: 'Sorry, there was an error' }
            )
        )
})

module.exports = router;