const axios = require('axios').default;

function receiveTickers() {
    // debugger
    return (axios.get('http://localhost:5000/api/transactions/activeTrades')
        .then(res => console.log(res))
        .catch( err => console.log(err))
    )
}

receiveTickers();

// function getStocksToGetInfo() {
//     // query mongo db
//     return [];
// }

// function getDataFromAPI(yourArrayFromFunctionAbove) {\
//     // call stock api with that Data
//     return data;
// }

// function updateMongoDBWithData(dataFromFunctionAbove) {
//     //update mongo DB with new values
//     return true;
// }

// updateMongoDBWithData(getDataFromAPI(getStocksToGetInfo()));