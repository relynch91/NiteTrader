const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const QuoteEndPointStockSchema = new Schema({
    symbol: { type: String, index: {unique: true}, required: true},
    open: { type: Number },
    high: { type: String },
    low: { type: String },
    price: { type: String },
    volume: { type: String },
    latestTradingDay: { type: String },
    previousClose: { type: String },
    change: { type: String },
    changePercent: { type: String}
});

module.exports = QuoteEndPointStock = mongoose.model(
    'QuoteEndpointStock', QuoteEndPointStockSchema); 