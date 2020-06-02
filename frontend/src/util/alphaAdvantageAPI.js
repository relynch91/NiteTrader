import axios from 'axios';
import key from '../frontConfig/frontKeys'

export const quoteEndPointDB = (endPointStock) => {
    return axios.patch('/api/stock_api/quoteendpointstock/update', endPointStock);
};

// stockurl = `/api/https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=IBM&apikey=https://www.alphavantage.co/query?function=GLOBAL_QUOTE%26symbol=IBM%26apikey=${Key.alphaKeyMaster}`
export const quoteEndPoint = (stockURL) => {
    return axios.get(stockURL);
};

export const intraDayAPI = (ticker) => {
    let apiCall = `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${ticker}&interval=5min&apikey=key`
}