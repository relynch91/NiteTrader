import axios from 'axios';

export const quoteEndPointDB = (endPointStock) => {
    return axios.post('/api/stocks_api', endPointStock);
};

export const quoteEndPoint = (stockURL) => {
    return axios.get(stockURL);
};

export const fetchAllQuoteEndPointDB = (ticker) => {
    let data =  axios.post('/api/stock_api/quoteendpointstock/stock', {
        symbol: `${ticker}`,
    }).then( data => console.log(data.data));
    return data.data;
};