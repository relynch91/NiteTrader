const express = require("express");
const router = express.Router();
const QuoteEndPointStock = require('../../../models/stock_api_requests/QuoteEndPointStock');
// test route
router.get("/test", (req, res) => res.json({
    msg: "This is the stocks route"
}));


// create a new entry in the database

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

// update a current entry in the database. 


router.patch('/update', (req, res) => {
    const query = { symbol: req.body.symbol };

    // const options 

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

    const updatedStock = QuoteEndPointStock.replaceOne(query, update);
    
    updatedStock.then(updatedStock => res.json(updatedStock));

    // Need to figure out how to re-render the updateStock. 
    // need to dispatch a get request for the updated stock. 
    // current ouput is the db response to the successful update.  Need to re-render 
})

// return all the stocks and information in the database 

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
    // Need to figure out how to rerender the index page after deleting a stock. 
})

module.exports = router;
