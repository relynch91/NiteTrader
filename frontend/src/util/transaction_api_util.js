import axios from 'axios';

export const tradeStock = (transaction) => {
    return axios.post('/api/transactions/trade', transaction);
};

export const fetchTrades = (userId) => {
    return axios.get(`/api/transactions/${userId}`);
};