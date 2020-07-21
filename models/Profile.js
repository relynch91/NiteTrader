const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProfileSchema = new Schema ({
    userID: { type: String, index: { unique: true } },
    date: { type: String, default: Date.now },
    value: { type: Number, default: 0 }
})

module.exports = ProfileData = mongoose.model(
    'ProfileData', ProfileSchema); 