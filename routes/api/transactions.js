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

router.get('/:username', (req, res) => {
    Transaction.find({
            username: req.params.username
        })
        .sort({
            date: 1
        })
        .then(trades => res.json(trades))
        .catch(err =>
            res.status(404).json({
                noTradesFound: 'No trades found from that user'
            })
        );
})

router.post('/sell', function(req, res) {
    // let cash = parseFloat(req.body.cash);
    let shares = req.body.shares;
    // let price = req.body.price;
    // let totalPrice = parseFloat(shares) * parseFloat(price);
    let ownedShares = parseInt(req.body.ownedShares);

    if (shares <= ownedShares) {
        let newTransaction = new Transaction({
            userId: req.body.userId,
            ticker: req.body.ticker,
            price: parseFloat(req.body.price),
            shares: parseInt(req.body.shares),
            buy: req.body.buy
        })
        newTransaction.save()
            .then(newTrans => res.json(newTrans))
            .catch(error => res.json(error));
    } else {
        res.status(404).json({
            notEnoughShares: 'Sorry, you do not own enough shares for that trade.'
        })
    }
})

router.post('/buy', function (req, res) {
    let cash = parseFloat(req.body.cash);
    let shares = req.body.shares;
    let price = req.body.price;
    let totalPrice = (parseFloat(shares) * parseFloat(price));
    if (totalPrice > cash) {
        res.status(404).json({
            notEnoughCash: 'You do not have enough cash for that transaction.'
        })
    } else {
        let newTransaction = new Transaction({
            userId: req.body.userId,
            ticker: req.body.ticker,
            price: parseFloat(req.body.price),
            shares: parseInt(req.body.shares),
            buy: req.body.buy
        })
        newTransaction.save()
            .then(newTrans => res.json(newTrans))
            .catch(error => res.json(error));
    }
})

module.exports = router;