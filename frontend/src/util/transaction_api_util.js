import axios from 'axios';

export const tradeStock = (transaction) => {
    debugger
    return axios.post('/api/transactions/trade', transaction);
    // return axios({
    //         method: 'post',
    //         url: '/api/transactions/trade',
    //         data: transaction,
    //         headers: {'Content-Type': 'multipart/form-data' }
    //     })
};

export const fetchTrades = (userId) => {
    return axios.get('/api/transactions/fetchtrades', userId);
};


