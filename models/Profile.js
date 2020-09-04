const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProfileSchema = new Schema ({
    userID: { type: String, index: true },
    value: { type: Number },
    cash: { type: Number }
})

module.exports = ProfileData = mongoose.model(
    'ProfileData', ProfileSchema); 