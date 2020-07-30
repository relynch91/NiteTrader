import { combineReducers } from 'redux';
import modalReducer from './modal_reducer';
import redirectReducer from './redirect_reducer';

export default combineReducers({
    modal: modalReducer,
    redirect: redirectReducer
});