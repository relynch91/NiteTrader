const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StockSchema = new Schema({
    ticker: {
        type: String,
        required: true
    },
    company: {
        type: String,
        required: true
    },
    price: {
        type: Float,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = Stock = mongoose.model('Stock', StockSchema);