import { combineReducers } from 'redux';
import SessionErrorsReducer from './session_errors_reducer';
import TransactionsErrorsReducer from './transactions_errors_reducer';
import alphaAPIErrorsReducer from './alphaAPI_errors_reducer';

export default combineReducers({
  session: SessionErrorsReducer,
  transactions: TransactionsErrorsReducer,
  apiCalls: alphaAPIErrorsReducer
});