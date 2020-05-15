import * as QuoteEndPointUtil from '../util/quote_end_point_util';

export const RECEIVE_STOCK = 'RECEIVE_STOCK';

export const receiveStock = (stock) => ({
    type: RECEIVE_STOCK,
    stock
})

// this is a get request for alphaVantage QuoteEndPointAPI 1 stock

export const getQuoteEndPointAlpha = stockURL => dispatch => (
    QuoteEndPointUtil.quoteEndPoint(stockURL).then((stockData) => (
        dispatch(receiveStock(stockData))
    ))
)

export const formatAPICall = apiObject => dispatch => {

}