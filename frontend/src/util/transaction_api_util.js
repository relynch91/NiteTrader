import axios from 'axios';

export const tradeStock = (transaction) => {
    debugger
    return axios.post('/api/transactions/trade', transaction);
};

export const fetchTrades = (userId) => {
    return axios.get('/api/transactions/fetchtrades', userId);
};


