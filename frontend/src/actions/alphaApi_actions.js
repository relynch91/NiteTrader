import * as QuoteEndPointUtil from '../util/quote_end_point_util';
import formatAPICall from './_alphaApi_actions';


// Upon signup, dispatch the approporiate action depending on which type of response we receieve from the backend
// export const signup = user => dispatch => (
//     APIUtil.signup(user).then(() => (
//         dispatch(receiveUserSignIn())
//     ), err => (
//         dispatch(receiveErrors(err.response.data))
//     ))
// );



export const getQuoteEndPointAlpha = stockURL => dispatch => (
    QuoteEndPointUtil.QuoteEndPoint(stockURL).then((stockData) => ({
        let formatted = formatAPICall(stockData);

        QuoteEndPointUtil.quoteEndPointDB(stockData).then(stockData => (
                )
    }
        
    ));
)
