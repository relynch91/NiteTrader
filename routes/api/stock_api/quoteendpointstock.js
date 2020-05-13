const express = require("express");
const router = express.Router();
const QuoteEndPointStock = require('../../../models/stock_api_requests/QuoteEndPointStock');

router.get("/test", (req, res) => res.json({
    msg: "This is the stocks route"
}));

router.post('/stock', (req, res) => {
    QuoteEndPointStock.findOne({ 
        symbol: req.body.symbol
    }).then(stock => {
        if (!stock) {
            const newStock = new QuoteEndPointStock({
                symbol: req.body.symbol,
                date: req.body.date,
                details: req.body.details
            })
            newStock.save().then(stock => res.json(stock));
        } else {
            QuoteEndPointStock.update(stock, {
                open: { type: Number },
                high: { type: Number },
                low: { type: Number },
                price: { type: Number },
                volume: { type: Number },
                latestTradingDay: { type: String },
                previousClose: { type: Number },
                change: { type: Number },
                changePercent: { type: Number}
            })
        }
    })
})

module.exports = router;