import axios from 'axios';

// `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${ticker}&apikey=demo`
export const quoteEndPointDB = (endPointStock) => {
    return axios.patch('/api/stock_api/quoteendpointstock/update', endPointStock);
};

// stockurl = `/api/https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=IBM&apikey=https://www.alphavantage.co/query?function=GLOBAL_QUOTE%26symbol=IBM%26apikey=${Key.alphaKeyMaster}`
export const quoteEndPoint = (stockURL) => {
    return axios.get(stockURL);
};
