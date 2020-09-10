import { combineReducers } from 'redux';
import modalReducer from './modal_reducer';
import redirectReducer from './redirect_reducer';
import loadingReducer from './loading_reducer';


export default combineReducers({
    modal: modalReducer,
    redirect: redirectReducer,
    loading: loadingReducer

    // september 9 1818
    // need to create a loading flag for the transactions. 
});