import * as AlphaAdvantageUtil from '../util/alphaAdvantageAPI';

export const RECEIVE_INTRADAY = 'RECEIVE_INTRADAY';
export const RECEIVE_INTRADAY_SUCCESS = 'RECEIVE_INTRADAY_SUCCESS';
export const RECEIVE_INTRADAY_FAILURE = 'RECEIVE_INTRADAY_FAILURE';


export const RECEIVE_TIME_SERIES = 'RECEIVE_TIME_SERIES';
export const RECEIVE_TIME_SERIES_SUCCESS = 'RECEIVE_TIME_SERIES_SUCCESS';
export const RECEIVE_TIME_SERIES_FAILURE = 'RECEIVE_TIME_SERIES_FAILURE';


export const RECEIVE_STOCK_NAME = 'RECEIEVE_STOCK_NAME';
export const RECEIVE_STOCK_NAME_SUCCESS = 'RECEIEVE_STOCK_NAME_SUCCESS';
export const RECEIVE_STOCK_NAME_FAILURE = 'RECEIEVE_STOCK_NAME_FAILURE';

// export const receiveStock = (stock) => ({
//     type: RECEIVE_STOCK,
//     stock
// })

export const receiveIntraDay = () => ({
    type: RECEIVE_INTRADAY,
})

export const receiveIntraDaySucess = stock => ({
    type: RECEIVE_INTRADAY_SUCCESS,
    stock
})

export const receiveIntraDayFailure = error => ({
    type: RECEIVE_INTRADAY_FAILURE,
    error
})

export const receiveTimeSeries = stock => ({
    type: RECEIVE_TIME_SERIES,
    stock
})

export const receiveStockName = (name) => ({
    type: RECEIVE_STOCK_NAME,
    name
})

// export const getQuoteEndPointAlpha = stockURL => dispatch => (
//     AlphaAdvantageUtil.quoteEndPoint(stockURL).then((stockData) => (
//         dispatch(receiveStock(stockData))
//     ))
// )

export const intraDayAPICall = apiURL => dispatch => (
    AlphaAdvantageUtil.intraDayAPI(apiURL).then((stockData) => (
        dispatch(receiveIntraDay(stockData))
    ))
)

export const timeSeriesInfoAPICall = apiURL => dispatch => (
    AlphaAdvantageUtil.timeSeriesInfo(apiURL).then((stockData) => (
        dispatch(receiveTimeSeries(stockData))
    ))
)

export const stockNameAPICall = apiURL => dispatch => (
    AlphaAdvantageUtil.stockName(apiURL).then(stockData => (
        dispatch(receiveStockName(stockData))
    ))
)