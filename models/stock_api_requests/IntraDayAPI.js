const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const IntraDayAPIStockSchema = new Schema({
    symbol: { type: String, index: {unique: true}},
    open: { type: Number },
    high: { type: Number },
    low: { type: Number },
    price: { type: Number },
    volume: { type: Number },
    latestTradingDay: { type: String },
    previousClose: { type: Number },
    change: { type: Number },
    changePercent: { type: String}
});

module.exports = IntraDayAPI = mongoose.model(
    'IntraDayAPI', IntraDayAPIStockSchema); 