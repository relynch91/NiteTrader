import axios from 'axios';
import Key from '../../../config/keys_prod';

// `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${ticker}&apikey=demo`

export const quoteEndPointDB = (endPointStock) => {
    return axios.post('/api/stocks_api', endPointStock);
};

export const quoteEndPoint = () => {
    return axios.get(
        `/api/https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=IBM&apikey=https://www.alphavantage.co/query?function=GLOBAL_QUOTE%26symbol=IBM%26apikey=${Key.alphaKeyMaster}`, endPointStock);
};
