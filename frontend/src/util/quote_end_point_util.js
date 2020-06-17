import axios from 'axios';

export const quoteEndPointDB = (endPointStock) => {
    return axios.post('/api/stocks_api', endPointStock);
};

export const quoteEndPoint = (stockURL) => {
    return axios.get(stockURL);
};

export const fetchQuoteEndPointDB = (ticker) => {
    return axios.post('/api/stock_api/quoteendpointstock/stock', {
        symbol: `${ticker}`,
    })
}