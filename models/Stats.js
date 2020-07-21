const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Stats = new Schema ({
    userID: { type: String, index: { unique: true } },
    date: { type: String, default: Date.now },
    value: { type: Number }
})

module.exports = StatsSchema = mongoose.model(
    'StatsSchema', Stats); 