const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const IntraDayStockSchema = new Schema({
    // 'Meta Data': { type: String },
    // 'Time Series (15min)': { type: Map }
    any: {}
});

module.exports = IntraDayStock = mongoose.model(
    'IntraDayStock', IntraDayStockSchema); 