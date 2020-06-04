const express = require("express");
const router = express.Router();
const IntraDayStock = require('../../../models/stock_api_requests/IntraDayAPI');

router.get("/test", (req, res) => res.json({
    msg: "This is the IntraDayAPI AlphAdvantage Stock route"
}));

router.post('/new', (req, res) => {
    const newStock = new IntraDayStock({
        'Meta Data': req.body
        // 'Time Series (15min)': req.body['Time Series (15min)']
    });
    // console.log(newStock);
    newStock.save().then(newStock => res.json(newStock))
    .catch(console.log(newStock))
});

router.patch('/update', (req, res) => {
    const query = { symbol: "I exist" };

    const update = {
        symbol: "I hope this works big time",
        information: "Big big time"
    };

    const updatedStock = IntraDayAPI.replaceOne(query, update, {
        upsert: true
    });
    updatedStock.then(updatedStock => res.json(updatedStock));
})

module.exports = router;