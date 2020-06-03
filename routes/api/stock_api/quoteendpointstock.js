const express = require("express");
const router = express.Router();
const QuoteEndPointStock = require('../../../models/stock_api_requests/QuoteEndPointStock');

router.get("/test", (req, res) => res.json({
    msg: "This is the stocks route"
    })
);

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
    const query = { symbol: req.body.symbol };

    const update = {
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
    };

    const updatedStock = QuoteEndPointStock.replaceOne(
        query, update, { upsert: true }
        );

    updatedStock.then(updatedStock => res.json(updatedStock));
})

router.get('/', (req, res) => { 
    const allStocks = QuoteEndPointStock.find();
    allStocks.then(allStocks => res.json(allStocks))
})

router.get('/stock', (req, res) => {
    const aStock = QuoteEndPointStock.findOne({
        symbol: { $eq: req.body.symbol }
        })
        .then(aStock => (res.json(aStock)))
        .catch(err =>
            res.status(404).json({
                notickersfound: 'No stocks found from that ticker'
            })
        )
});

router.delete('/DELETE', (req, res) => {

    const deleteStock = QuoteEndPointStock.deleteOne( 
        { symbol: { $eq: req.body.symbol } })

    deleteStock.then((deleteStock) => res.json(deleteStock))
})

module.exports = router;