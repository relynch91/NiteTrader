const express = require("express");
const router = express.Router();
const Transaction = require('../../models/Transaction');

router.get("/test", (req, res) => res.json({
    msg: "This is the transactions route"
}));

router.get('/activeTrades', (req, res) => {
    Transaction.find({ buy: true }, { ticker: 1, _id: 0 })
        .then( tickerArray => res.json(tickerArray))
        .catch(err => 
            res.status(404).json({ noTradesFound: 'No active trades found' }
            )
        )
});

router.get('/:userId', (req, res) => {
    Transaction.find({ userId: req.params.userId })
        .sort({ date: 1 })
        .then(trades => res.json(trades))
        .catch(err =>
            res.status(404).json({ noTradesFound: 'No trades found from that user' }
            )
        );   
})

router.post('/trade', function(req, res){
    let newTransaction = new Transaction({
        userId: req.body.userId,
        ticker: req.body.ticker,
        price: parseFloat(req.body.price),
        shares: parseInt(req.body.shares),
        buy: req.body.buy 
    })
    newTransaction.save().then(newTrans => res.json(newTrans));
})

module.exports = router;
