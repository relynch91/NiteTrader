const express = require("express");
const router = express.Router();
const IntraDayAPI = require('../../../models/stock_api_requests/IntraDayAPI');

router.get("/test", (req, res) => res.json({
    msg: "This is the IntraDayAPI AlphAdvantage Stock route"
}));

router.post('/new', (req, res) => {
    const newStock = new IntraDayAPI({
        details: req.body
    });

    newStock.save().then(newStock => res.json(newStock));
});

router.patch('/update', (req, res) => {
    debugger
    const query = {
        data: req.body["Meta Data"]
    };

    const update = {
        body: req.body
    };

    const updatedStock = IntraDayAPI.replaceOne(query, update, {
        upsert: true
    });
    updatedStock.then(updatedStock => res.json(updatedStock));
})

module.exports = router;