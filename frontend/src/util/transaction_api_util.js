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
