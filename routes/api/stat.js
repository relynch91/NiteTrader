const express = require("express");
const router = express.Router();
const Stat = require('../../models/Stat');

router.get("/test", (req, res) => res.json({
    msg: "This is the Profile route"
}));

router.post('/new', (req, res) => {
    const newStats = new Stat({
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
    // const query = { userID: req.body.userID };
    // const update = {
    //     value: req.body.value
    // };
    Stat.updateOne(
        { userID: req.body.userID }, // query  
        { $set: {value: req.body.value } }, //update
        { 
            upsert: true 
        }
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