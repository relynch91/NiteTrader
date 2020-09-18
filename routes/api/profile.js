const express = require("express");
const router = express.Router();
const ProfileData = require('../../models/Profile.js');

router.post('/new', (req, res) => {
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

router.get('/:userId', (req, res) => {
    ProfileData.find({ userId: req.params.userId })
        .then(trades => res.json(trades))
        .catch(err =>
            res.status(404).json({ noUsersFound: err }
            )
        );
})

router.patch('/update', (req, res) => {
    const query = { userId: req.body.userId };
    const update = {
        userId: req.body.userId,
        value: req.body.value,
        cash: req.body.cash,
        date: req.body.date
    };
    const updatedStock = ProfileData.replaceOne(
        query, update, { upsert: true }
    );
    updatedStock
        .then(updatedStock => res.json(updatedStock))
        .catch((error) =>
            res.status(404).json({
                error: error}
        ))
})

router.post('/posts', (req, res) => {

    ProfileData.find()
    .then(query => res.json(query))
    .catch(err =>
        res.json({ error: err}
        )
    )
})

router.post('/allProfiles', (req, res) => {
    // console.log(req.body.userId);
    ProfileData.find({ $and: [ { userId: { $eq: req.body.userId } },
        { date: { $eq: req.body.date } }] }
    )
    .then(query => res.json(query))
    .catch(err =>
        res.status(404).json({ profileNotFound: 'Sorry, there was an error' }
        )
    )
})
module.exports = router;