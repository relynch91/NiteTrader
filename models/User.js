const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: {
        type: String,
        required: true,
        index: { unique: true }
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = User = mongoose.model('User', UserSchema);


// Simpler Way to store and fetch, but ultimately less scalable
//   transactions: [
                // { ticker: 'AAPL', price: 100, shares: 10, buy: true, date: "Date.now()"},
                // { ticker: 'AAPL', price: 105, shares: 10, buy: false, date: "Date.now()"},
                // { ticker: 'AAPL', price: 90, shares: 10, buy: true, date: "Date.now()"}
    // ],
    // Stocks: [ticker: "AAPL", purchasePrice: ""]