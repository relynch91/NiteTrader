import axios from 'axios';

// `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${ticker}&apikey=demo`
export const stockSaveToDB = (stockData) => {

    return axios.post('/api/stocks', stockData);
};

// const baseUrl = 'http://localhost:3000/api/v1'
// fetch(`${baseUrl}`).then(res => res)


// need to update api key as well ^ 