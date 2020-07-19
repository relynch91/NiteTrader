const express = require("express");
const router = express.Router();
const Profile = require('../../models/Profile.js');

router.get("/test", (req, res) => res.json({
    msg: "This is the Profile route"
}));

router.post('/new', (req, res) => {
    const newProfile = new Profile({
        userID: req.body.userID,
        // profileValue: req.body.profileValue
    })

    newProfile.save()
        .then(newProfile => res.json(newProfile))
        .catch(() =>
            res.status(404).json({
                notickersfound: 'There was a globalEndPointError'
            })
        );
})

router.patch('/update', (req, res) => {
    const query = { symbol: req.body.userID };
    const update = {
        profileValue: req.body.profileValue
    };

    const updatedStock = QuoteEndPointStock.replaceOne(
        query, update, { upsert: true }
    );

    updatedStock
        .then(updatedStock => res.json(updatedStock))
        .catch(() =>
            res.status(404).json({
                notickersfound: 'There was a globalEndPointError'
            })
        );
})

module.exports = router;