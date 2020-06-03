const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const IntraDayAPIStockSchema = new Schema({
    'Meta Data': { type: Object },
    'Time Series (15min)': { type: Object }
});

module.exports = IntraDayAPI = mongoose.model(
    'IntraDayAPI', IntraDayAPIStockSchema); 