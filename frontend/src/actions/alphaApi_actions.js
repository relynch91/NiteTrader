import * as AlphaAdvantageUtil from '../util/alphaAdvantageAPI';

export const RECEIVE_STOCK = 'RECEIVE_STOCK';
export const RECEIVE_INTRADAY = 'RECEIVE_INTRADAY';
export const RECEIVE_TIME_SERIES = 'RECEIVE_TIME_SERIES';
export const RECEIVE_STOCK_NAME = 'RECEIEVE_STOCK_NAME';

export const receiveStock = (stock) => ({
    type: RECEIVE_STOCK,
    stock
})

export const receiveIntraDay = (stock) => ({
    type: RECEIVE_INTRADAY,
    stock
})

export const receiveTimeSeries = (stock) => ({
    type: RECEIVE_TIME_SERIES,
    stock
})

export const receiveStockName = (name) => ({
    type: RECEIVE_STOCK_NAME,
    name
})

export const getQuoteEndPointAlpha = stockURL => dispatch => (
    AlphaAdvantageUtil.quoteEndPoint(stockURL).then((stockData) => (
        dispatch(receiveStock(stockData))
    ))
)

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