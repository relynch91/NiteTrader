const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProfileSchema = new Schema ({
    userId: { type: String, index: true },
    value: { type: Number },
    cash: { type: Number },
    date: { type: String }
})

module.exports = ProfileData = mongoose.model(
    'ProfileData', ProfileSchema); 