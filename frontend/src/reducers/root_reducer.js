import { combineReducers } from 'redux';
import session from './session_reducer';
import errors from './errors_reducer';
import ui from './ui_reducer';
import stocks from './alphaAPI_reducer'

const RootReducer = combineReducers({
    session,
    errors,
    ui,
    stocks
});

export default RootReducer;