const express = require("express");
const router = express.Router();
const StatSchema = require('../../models/Stat.js');

router.get("/test", (req, res) => res.json({
    msg: "This is the Profile route"
}));

router.post('/new', (req, res) => {
    const newStats = new StatSchema({
        userID: req.body.userID,
        value: req.body.value
    })

    newStats.save()
        .then(newStats => res.json(newStats))
        .catch((error) =>
            res.status(404).json(error)
        );
})

router.patch('/update', (req, res) => {
    const query = { userID: req.body.userID };
    const update = {
        value: req.body.value
    };
    const updatedStock = StatSchema.replaceOne(
        query, update, { upsert: true }
    );
    
    updatedStock
        .then(updatedStock => res.json(updatedStock))
        .catch((error) =>
            res.status(404).json({
                noUsersFound: error
            })
        );
})

router.get('/:userId', (req, res) => {
    StatSchema.findOne({ userID: req.params.userID })
        .then(trades => res.json(trades))
        .catch(err =>
            res.status(404).json({ noStatsFound: 'No trades found from that user' }
            )
        );
})

module.exports = router;