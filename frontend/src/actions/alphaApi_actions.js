import * as AlphaAdvantageUtil from '../util/alphaAdvantageAPI';

export const RECEIVE_STOCK = 'RECEIVE_STOCK';
export const RECEIVE_INTRADAY = 'RECEIVE_INTRADAY';
export const RECEIVE_TIME_SERIES = 'RECEIVE_TIME_SERIES';

export const receiveStock = (stock) => ({
    type: RECEIVE_STOCK,
    stock
})

export const receiveIntraDay = (stock) => ({
    type: RECEIVE_INTRADAY,
    stock
})

export const receiveTimeSeries = stock => ({
    type: RECEIVE_TIME_SERIES,
    stock
})

export const getQuoteEndPointAlpha = stockURL => dispatch => (
    AlphaAdvantageUtil.quoteEndPoint(stockURL).then((stockData) => (
        dispatch(receiveStock(stockData))
        // .catch(e => console.log("That API Call did not work. Please try again!"))
    ))
)

export const intraDayAPICall = apiURL => dispatch => (
    AlphaAdvantageUtil.intraDayAPI(apiURL).then((stockData) => (
        dispatch(receiveIntraDay(stockData))
        .catch( e => console.log("That API Call did not work. Please try again!"))
    ))
)

export const timeSeriesInfoAPICall = apiURL => dispatch => (
    AlphaAdvantageUtil.timeSeriesInfo(apiURL).then((stockData) => (
        dispatch(receiveTimeSeries(stockData))
    ))
)