import axios from 'axios';

export const quoteEndPointDB = (endPointStock) => {
    return axios.post('/api/stocks_api', endPointStock);
};

export const quoteEndPoint = (stockURL) => {
    return axios.get(stockURL);
};

export const fetchAllQuoteEndPointDB = () => {
    return axios.get(`/api/stock_api/quoteendpointstock/stock`);
};

