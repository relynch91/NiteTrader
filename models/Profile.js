const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProfileSchema = new Schema ({
    userID: { type: String, index: true },
    date: { type: String, default: Date.now },
    value: { type: Number }
})

module.exports = ProfileData = mongoose.model(
    'ProfileData', ProfileSchema); 