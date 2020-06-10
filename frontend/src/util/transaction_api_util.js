import axios from 'axios';

export const tradeStock = (transaction) => {
    return axios.post('/api/transactions/trade', transaction);
};

export const fetchTrades = (userId) => {
    return axios.get(`/api/transactions/${userId}`);
};

export const allStocks = () => {
    let tickers = axios.get('/api/transactions/activeTrades')
    return tickers;
}

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
    return res;
}

function newPricePerShareBuy(existingStock, newStock) {
    let startingPrice = existingStock.pricePerShare * existingStock.ownedShares;
    let secondPrice = newStock.price * newStock.shares;
    let totalShares = existingStock.ownedShares + newStock.shares
    return (startingPrice + secondPrice) / totalShares
}