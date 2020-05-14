import axios from 'axios';

// `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${ticker}&apikey=demo`

export const stockSaveToDB = (endPointStocks) => {

    return axios.post('/api/stocks_api', endPointStocks);

};


// {
//     "_id": "5ebd8d9c00098c6ed815ece6",
//     "symbol": "GoogleTest",
//     "open": 15,
//     "low": 114.85,
//     "price": 100,
//     "volume": 3153277,
//     "change": -4.53,
//     "changePercent": -3.7668,
//     "__v": 0
// }

// const baseUrl = 'http://localhost:3000/api/v1'
// fetch(`${baseUrl}`).then(res => res)


// need to update api key as well ^ 