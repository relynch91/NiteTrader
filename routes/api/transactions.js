const express = require("express");
const router = express.Router();
const Transaction = require('../../models/Transaction')

router.get("/test", (req, res) => res.json({
    msg: "This is the transactions route"
}));

router.get('/:userId', (req, res) => {
    console.log(req)
    Transaction.find({ userId: req.params.userId })
        .sort({ date: 1 })
        .then(trades => res.json(trades))
        .catch(err =>
            res.status(404).json({ noTradesFound: 'No trades found from that user' }
            )
        );
    // // debugger
    // Transaction.find({userId: req.body.userId})
    //     .then(trades => res.json(trades))
    //     .catch(err => res.json('this user has no trades'))
    //     // , function(err, trade){    
    // const userTrades = Transaction.find({ userId: req.body.userId }, function(err, trades){
    //     res.send(trades)
    // })
    // const userTrades = Transaction.find()
    // console.log(userTrades);
    // return res.send(trades)
        // .toArray()
    // if (userTrades.length > 0) { res.json(userTrades[0]); }
        // .then(() => res.send(userTrades))
    // const newArr = [];
    
    // userTrades.map(trades => { 
    //     newArr.push(trades);
    // }).then( () => res.json(newArr))
       
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
