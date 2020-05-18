const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PortfolioSchema = new Schema({
    // calculation == buyin +- assets profit/loss
    totalAssets: {
        type: Number,
        default: Date.now
    }
    // calculation == do we need a date it changed by?
    percentChangePortfolio: {
        type: Number,
        default: Date.now
    }
    // calculation == buyin - purchases
    currentCash: {
        type: Number,
        default: Date.now
    }
    assets: {
         ticker: {
             // ref to transaction
                type: String,
                required: true,
                index: { unique: true }
            },
            // ref to transaction
            purchasePrice: {
                type: Number,
                required: true
            },
            // ref to transaction
            numShares: {
                type: Number,
                required: true
            },
            // api call
            latestPrice: {
                type: Number,
                required: true
            },
            // calculation
            percentChangeStock: {
                type: Number,
                default: Date.now
            }
    }
})

// module.exports = User = mongoose.model('User', UserSchema);