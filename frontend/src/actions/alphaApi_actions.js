import * as AlphaAdvantageUtil from '../util/alphaAdvantageAPI';

export const RECEIVE_STOCK = 'RECEIVE_STOCK';

export const receiveStock = (stock) => ({
    type: RECEIVE_STOCK,
    stock
})

// this is a get request for alphaVantage QuoteEndPointAPI 1 stock

export const getQuoteEndPointAlpha = stockURL => dispatch => (
    AlphaAdvantageUtil.quoteEndPoint(stockURL).then((stockData) => (
        dispatch(receiveStock(stockData))
    ))
)
