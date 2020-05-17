const express = require("express");
const router = express.Router();
const Transaction = require('../../models/Transaction')

router.get("/test", (req, res) => res.json({
    msg: "This is the stocks route"
}));



router.post('/trade', function(req, res){
    
    let newTransaction = new Transaction({
        userId: req.body.userId,
        ticker: req.body.ticker,
        // price: parseFloat(req.body.price),
        price: req.body.price,
        shares: req.body.shares,
        buy: req.body.buy 
    })
    newTransaction.save().then(newTrans => res.json(newTrans));
})

module.exports = router;