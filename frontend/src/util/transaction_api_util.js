import axios from 'axios';

export const buyStock = (transaction) => {
    return axios.post('/api/transactions/buy', transaction)
};

export const sellStock = (transaction) => {
    return axios.post('/api/transactions/sell', transaction)
};

export const fetchTrades = (userId) => {
    return axios.get(`/api/transactions/${userId}`)
};

export const allStocks = () => {
    let tickers = axios.get('/api/transactions/activeTrades')
    return tickers;
}

export const updateDataBase = (globalEndPoint) => {
    return  axios.patch(
        '/api/stock_api/quoteendpointstock/update',
        // 'https://nitetrader.herokuapp.com/api/stock_api/quoteendpointstock/update', 
        globalEndPoint);
}