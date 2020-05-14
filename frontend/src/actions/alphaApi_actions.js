import * as QuoteEndPointUtil from '../util/quote_end_point_util';
import * as QuoteEndPointFormat from './_alphaApi_actions';
import formatAPICall from './_alphaApi_actions';


// Upon signup, dispatch the approporiate action depending on which type of response we receieve from the backend
// export const signup = user => dispatch => (
//     APIUtil.signup(user).then(() => (
//         dispatch(receiveUserSignIn())
//     ), err => (
//         dispatch(receiveErrors(err.response.data))
//     ))
// );

// {
//     "Global Quote": {
//         "01. symbol": "AAPL",
//         "02. open": "304.5100",
//         "03. high": "309.7900",
//         "04. low": "301.5300",
//         "05. price": "309.5400",
//         "06. volume": "39653816",
//         "07. latest trading day": "2020-05-14",
//         "08. previous close": "307.6500",
//         "09. change": "1.8900",
//         "10. change percent": "0.6143%"
//     }
// }

export const getQuoteEndPointAlpha = stockURL => dispatch => (
    QuoteEndPointUtil.QuoteEndPoint(stockURL).then((stockData) => ({
        let formatted = formatAPICall(stockData);

        QuoteEndPointUtil.quoteEndPointDB(stockData).then(stockData => (
                )
    }
        
    ));
)
