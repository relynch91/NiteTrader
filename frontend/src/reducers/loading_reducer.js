import { RECEIVE_TRANSACTION_START, 
    RECEIVE_TRANSACTION_END } from '../actions/transaction_actions';

const redirectReducer = (state = null, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_TRANSACTION_START:
            return { flag: true }
        case RECEIVE_TRANSACTION_END:
            return { flag: false }
        default:
            return { flag: false };
    }
};

export default redirectReducer;