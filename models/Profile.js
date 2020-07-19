const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProfileSchema = new Schema ({
    userId: { type: String, index: { unique: true }, required: true },
    profileValue: [{
        date: { type: Date, default: Date.now },
        profileValue: { type: Number, default: 0 }
    }]
})



module.exports = ProfileData = mongoose.model(
    'ProfileData', ProfileSchema); 