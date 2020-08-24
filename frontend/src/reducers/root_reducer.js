import { combineReducers } from 'redux';
import session from './session_reducer';
import errors from './errors/errors_reducer.js';
import ui from './ui_reducer';
import stocks from './alphaAPI_reducer';
import transactions from './transactions_reducer';
import portfolio from './portfolio_reducer';
import profile from './profile_reducer';
import ownedStocks from './currentStocks_reducer';


const RootReducer = combineReducers({
    session,
    errors,
    ui,
    stocks,
    transactions,
    portfolio,
    profile,
    ownedStocks
});

export default RootReducer;