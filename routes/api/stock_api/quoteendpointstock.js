const express = require("express");
const router = express.Router();
const QuoteEndPointStock = require('../../../models/stock_api_requests/QuoteEndPointStock');

router.get("/test", (req, res) => res.json({
    msg: "This is the stocks route"
}));

router.post('/new', (req, res) => {

    const newStock = new QuoteEndPointStock({
        symbol: req.body.symbol,
        open: req.body.open,
        high: req.body.high,
        low: req.body.low,
        price: req.body.price,
        volume: req.body.volume,
        lastTradingDay: req.body.lastTradingDay,
        previousClose: req.body.previousClose,
        change: req.body.change,
        changePercent: req.body.changePercent
    });

    newStock.save().then(newStock => res.json(newStock));
});

router.patch('/update', (req, res) => {
    
        const updatedStock = QuoteEndPointStock.replaceOne({symbol: req.body.symbol}, {
            symbol: req.body.symbol,
            open: req.body.open,
            high: req.body.high,
            low: req.body.low,
            price: req.body.price,
            volume: req.body.volume,
            lastTradingDay: req.body.lastTradingDay,
            previousClose: req.body.previousClose,
            change: req.body.change,
            changePercent: req.body.changePercent
        })

        updatedStock.save().then(updatedStock => res.json(updatedStock))
})

module.exports = router;