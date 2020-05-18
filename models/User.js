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

// const PortfolioSchema = new Schema({
//     // calculation == buyin +- assets profit/loss
//     totalAssets: {
//         type: Date,
//         default: Date.now
//     }
//     // calculation == do we need a date it changed by?
//     percentChangePortfolio: {
//         type: Date,
//         default: Date.now
//     }
//     // calculation == buyin - purchases
//     currentCash: {
//         type: Date,
//         default: Date.now
//     }
//     assets: {
//          ticker: {
//              // ref to transaction
//                 type: String,
//                 required: true,
//                 index: { unique: true }
//             },
//             // ref to transaction
//             purchasePrice: {
//                 type: String,
//                 required: true
//             },
//             // ref to transaction
//             numShares: {
//                 type: Number,
//                 required: true
//             },
//             // api call
//             latestPrice: {
//                 type: String,
//                 required: true
//             },
//             // calculation
//             percentChangeStock: {
//                 type: Date,
//                 default: Date.now
//             }
//     }
// })