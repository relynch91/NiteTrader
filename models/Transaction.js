const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TransactionSchema = new Schema({
    userId: {
        type: String,
        required: true,
    },
    ticker: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    shares: {
        type: Number,
        required: true,
    },
    buy: {
        type: Boolean,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = Transaction = mongoose.model('Transaction', TransactionSchema)