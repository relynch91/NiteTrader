const express = require("express");
const router = express.Router();
const QuoteEndPointStock = require('../../models/stock_api_requests/QuoteEndPointStock');

router.get("/test", (req, res) => res.json({
    msg: "This is the stocks route"
}));

router.post('/stocks', (req, res) => {
    QuoteEndPointStock.findOne({ 
        symbol: req.body.symbol
    }).then(stock => {
        if (!stock) {
            const newStock = new QuoteEndPointStock({
                symbol: req.body.symbol,
                date: req.body.date,
                details: req.body.details
            })
            return newStock;
        } else {
            stock.update
        }
    })
});



module.exports = router;