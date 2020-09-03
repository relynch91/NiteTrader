import * as QuoteEP from '../util/quote_end_point_util';

export const activeShares = (trades) => {
    console.log(trades);
    let res = {};
    let answer = {};
    Object.values(trades).forEach((trade) => {
        debugger
        let stock = res[trade.ticker];
        if (!stock && trade.buy === true) {
            res[trade.ticker] = {
                pricePerShare: trade.price,
                ownedShares: trade.shares
            }
        } else if (stock && trade.buy === true) {
            stock.pricePerShare = newPricePerShareBuy(stock, trade);
            stock.ownedShares += trade.shares;
        } else if (stock && (trade.buy === false)) {
            stock.ownedShares -= trade.shares;
            if (stock.ownedShares === 0) {
                stock.pricePerShare = 0;
            } else {
                stock.pricePerShare = newPricePerShareSell(stock, trade);
            }
        }
    })
    console.log(res);
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

function newPricePerShareSell(stock, trade) {
    let startingValue = stock.pricePerShare * stock.ownedShares;
    let tradeValue = trade.price * trade.shares;
    let totalShares = stock.ownedShares - trade.shares;
    let newPrice = ((startingValue - tradeValue) / totalShares);
    return newPrice;
}

export const fetchDBStockData = (transactions) => {
    let allPromises = transactions.map(ticker => QuoteEP.fetchQuoteEndPointDB(ticker))
    
    return Promise.all(allPromises);
}

 export const overUnder = (stockObj) => {
        let purchased = stockObj.pricePerShare;
        let current = (parseInt(stockObj.quoteEndPointData.price).toFixed(2))
        return (parseFloat(current - purchased)).toFixed(2);
}

export const formatPortfolioData = (portfolio) => {
    let res = [];

    Object.keys(portfolio).forEach(ticker => {
        let key = parseFloat(portfolio[ticker].changePercent) > 0 ? 'Gain' : 'Loss';
        res.push({
            name: ticker,
            [key]: parseFloat(portfolio[ticker].changePercent)
        })
    })
    return res;
}