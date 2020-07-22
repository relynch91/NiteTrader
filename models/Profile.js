const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProfileSchema = new Schema ({
    userID: { type: String, index: true },
    date: { type: String, default: new Date() },
    value: { type: Number },
    cash: { type: Number }
})

module.exports = ProfileData = mongoose.model(
    'ProfileData', ProfileSchema); 