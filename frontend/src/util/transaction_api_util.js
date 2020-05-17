import axios from 'axios';

export const tradeStock = (transanction) => {
    return axios.post('/api/transactions/trade', transanction);
    // return axios({
    //         method: 'post',
    //         url: '/api/transanction/trade',
    //         data: transanction,
    //         headers: {'Content-Type': 'multipart/form-data' }
    //     })
};

export const fetchTrades = (userId) => {
    return axios.get('/api/transanction/fetchtrades', userId);
};

