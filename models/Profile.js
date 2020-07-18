const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProfileSchema = new Schema ({
    userId: { type: String, index: { unique: true }, required: true },
    cash: { type: Number, default: 50000 },
    stockValue: { default: [] }
})
