const express = require("express");
const router = express.Router();
const IntraDayAPI = require('../../../models/stock_api_requests/IntraDayAPI');

router.get("/test", (req, res) => res.json({
    msg: "This is the IntraDayAPI AlphAdvantage Stock route"
}));

router.patch('/update', (req, res) => {
    const query = {
        symbol: req.body.symbol
    };

    const update = {
        symbol: req.body.symbol,
        timeSeries: req.body.timeSeries
    };

    const updatedStock = IntraDayAPI.replaceOne(query, update);

    updatedStock.then(updatedStock => res.json(updatedStock));

    // Need to figure out how to re-render the updateStock. 
    // need to dispatch a get request for the updated stock. 
    // current ouput is the db response to the successful update.  Need to re-render 
})

module.exports = router;