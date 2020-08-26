const express = require("express");
const router = express.Router();
const Stat = require('../../models/Stat');

router.post('/new', (req, res) => {
    const newStats = new Stat({
        userID: req.body.userID,
        value: req.body.value
    })

    newStats.save()
        .then(newStats => res.json(newStats))
        .catch((error) =>
            res.status(404).json({
                newUserError: error
            })
        );
})

router.patch('/update', (req, res) => {
    Stat.updateOne(
        { userID: req.body.userID }, 
        { $inc: {value: req.body.value } },
        { upsert: true }
    ).then(updatedStock => res.json(updatedStock))
    .catch((error) =>
        res.status(404).json({
            noUsersFound: error
        })
    );
})

router.get('/:userID', (req, res) => {
    Stat.find({ userID: req.params.userID })
        .then(trades => res.json(trades))
        .catch(err =>
            res.status(404).json({ noUsersFound: 'No Users found from that name' }
            )
        );
})

module.exports = router;