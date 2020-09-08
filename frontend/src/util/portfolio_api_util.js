import * as QuoteEP from '../util/quote_end_point_util';
import { max, min } from 'd3-array';

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
            res[trade.ticker].pricePerShare = newPricePerShareBuy(stock, trade);
            res[trade.ticker].ownedShares += trade.shares;
        } else if ( trade.buy === false ) {
            res[trade.ticker].pricePerShare = newPricePerShareSell(stock, trade);
            res[trade.ticker].ownedShares -= trade.shares;
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
    let newPrice = ((startingPrice + secondPrice) / totalShares);
    return newPrice;
}

function newPricePerShareSell(stock, trade) {
    let startingValue = stock.pricePerShare * stock.ownedShares;
    let tradeValue = trade.price * trade.shares;
    let totalShares = stock.ownedShares - trade.shares;
    if (totalShares === 0) {
        return 0
    } else {
        let newPrice = ((startingValue - tradeValue) / totalShares);
        return newPrice;
    }
}

export const fetchDBStockData = (transactions) => {
    let allPromises = transactions.map(ticker => QuoteEP.fetchQuoteEndPointDB(ticker));
    return Promise.all(allPromises);
}

 export const overUnder = (stockObj) => {
        let purchased = stockObj.pricePerShare;
        let current = (parseInt(stockObj.quoteEndPointData.price).toFixed(2))
        return (parseFloat(current - purchased)).toFixed(2);
}

export const formatPortfolioData = (portfolio) => {
    let res = {};
    Object.keys(portfolio).forEach(ticker => {
        let tickerKey = ticker;
        let value = parseFloat(portfolio[ticker].changePercent)
        res[tickerKey] = value;
    })
    return res;
}

export const createMinMax = (data) => {
    let yMax = Math.ceil(max(Object.values(data)));
    let yMin = Math.ceil(min(Object.values(data)));
    if (yMax > 10) {
        yMax += 5;
    } else {
        yMax += 3;
    }
    if (yMin < (-10)) {
        yMin -= 5;
    } else {
        yMin -= 3;
    }
    return [yMin, yMax];
}