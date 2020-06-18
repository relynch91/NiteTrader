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
    let activeTickers = Object.keys(transactions).filter(ticker => transactions[ticker].ownedShares > 0)
        // if (transactions[ticker].ownedShares > 0) {
        //     return ticker;
        // }
    // });

    activeTickers.forEach( ticker => {
        res[ticker] = transactions[ticker];
        QuoteEP.fetchQuoteEndPointDB(ticker)
        .then( data => res[ticker].quoteEndPointData = data['data'])
            .then(() => res[ticker]['diff'] = overUnder(res[ticker]));
    })
    return res;
}

 function overUnder(stockObj){
        // let purchased = stockObj.pricePerShare;
        // let current = Math.floor(parseInt(stockObj.quoteEndPointData.price))
        // return Math.round(parseFloat(current - purchased));
}