const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StatSchema = new Schema ({
    userID: { type: String, required: true, index: { unique: true } },
    date: { type: String, default: Date.now },
    value: { type: Number, default: 50000 }
})

module.exports = Stat = mongoose.model(
    'Stat', StatSchema); 