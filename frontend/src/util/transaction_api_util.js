import axios from 'axios';

export const tradeStock = (transanction) => {
    return axios.post('/api/transanction/trade', transanction);
};

export const fetchTrades = (userId) => {
    return axios.get('/api/transanction/fetchtrades', userId);
};

