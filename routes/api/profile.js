const express = require("express");
const router = express.Router();
const Profile = require('../../models/Profile.js');

router.get("/test", (req, res) => res.json({
    msg: "This is the Profile route"
}));

router.post('/new', (req, res) => {
    const newProfile = new Profile({
        userID: req.body.userID,
        value: req.body.value
    })

    newProfile.save()
        .then(newProfile => res.json(newProfile))
        .catch((error) =>
            res.status(404).json({
                error: "I am here"
            })
        );
})

router.patch('/update', (req, res) => {
    const query = { userId: req.body.userId };

    const update = {
        profileValue: req.body.profileValue
    };

    res.json(query, update);
    // console.log(update);
    // const updatedStock = Profile.updateOne(
    //     query, update, { upsert: true }
    // );

    // updatedStock
    //     .then(updatedStock => res.json(updatedStock))
    //     .catch((error) =>
    //         res.status(404).json(
    //             error
    //         )
    //     );
})

module.exports = router;