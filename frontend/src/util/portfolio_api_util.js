import * as QuoteEP from '../util/quote_end_point_util';

export const activeShares = (trades) => {
    let res = {};
    let answer = {};
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
    Object.keys(res).forEach((ticker) => {
        if (res[ticker].ownedShares > 0) {
            answer[ticker] = res[ticker];
        }
    })
    return answer;
}

function newPricePerShareBuy(existingStock, newStock) {
    let startingPrice = existingStock.pricePerShare * existingStock.ownedShares;
    let secondPrice = newStock.price * newStock.shares;
    let totalShares = existingStock.ownedShares + newStock.shares
    return (startingPrice + secondPrice) / totalShares;
}

export const fetchDBStockData = (transactions) => {
    let activeTickers = Object.keys(transactions).filter(ticker => transactions[ticker].ownedShares > 0)
    let allPromises = activeTickers.map(ticker => QuoteEP.fetchQuoteEndPointDB(ticker))
    return Promise.all(allPromises);
}

 export const overUnder = (stockObj) => {
        let purchased = stockObj.pricePerShare;
        let current = (parseInt(stockObj.quoteEndPointData.price).toFixed(2))
        return (parseFloat(current - purchased)).toFixed(2);
}

export const formatPortfolioData = (portfolio) => {
    let res = [];
    let keys = Object.keys(portfolio);
    // let numStocks = Object.keys(portfolio).length;
    // if (numStocks > 8) {
    //     numStocks = 8
    // }
    // for (let i = 0; i < numStocks.length; i ++) {
    //     let key = parseFloat(portfolio[keys[i]].quoteEndPointData.changePercent) > 0 ? 'Gain' : 'Loss';
    //     res.push({
    //         name: portfolio[keys[i]].quoteEndPointData.symbol,
    //         [key]: parseFloat(portfolio[keys[i]].quoteEndPointData.changePercent)
    //     })
    // }

    Object.keys(portfolio).forEach(ticker => {
        let key = parseFloat(portfolio[ticker].quoteEndPointData.changePercent) > 0 ? 'Gain' : 'Loss';
        res.push({
            name: ticker,
            [key]: parseFloat(portfolio[ticker].quoteEndPointData.changePercent)
        })
    })
    return res;
}
