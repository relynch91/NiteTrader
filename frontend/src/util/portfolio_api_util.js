import * as QuoteEP from '../util/quote_end_point_util'

export const activeShares = (trades) => {
    let res = {}
    Object.values(trades).forEach((trade) => {
        let stock = res[trade.ticker];
        if (!stock && trade.buy === true) {
            res[trade.ticker] = {
                pricePerShare: trade.price,
                ownedShares: trade.shares
            }
        } else if (stock && trade.buy === true) {
            stock.pricePerShare = newPricePerShareBuy(stock, trade);
            stock.ownedShares += trade.shares;
        } else if (stock && trade.buy === false) {
            stock.ownedShares -= trade.shares
        }
    })
    return ownedStocksOnly(res);
}

function newPricePerShareBuy(existingStock, newStock) {
    let startingPrice = existingStock.pricePerShare * existingStock.ownedShares;
    let secondPrice = newStock.price * newStock.shares;
    let totalShares = existingStock.ownedShares + newStock.shares
    return (startingPrice + secondPrice) / totalShares;
}

function ownedStocksOnly(transactions) {
    let res = {};
    let activeTickers = Object.keys(transactions).filter(ticker => {
        if (transactions[ticker].ownedShares > 0) {
            return ticker;
        }
    })
    activeTickers.forEach( async ticker => {
        res[ticker] = transactions[ticker];
        let data = await QuoteEP.fetchAllQuoteEndPointDB(ticker);
        res[ticker].quoteEndPointData = data;
    })
    return res;
}