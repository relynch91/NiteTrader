import { RECEIVE_REDIRECT } from '../actions/ui_actions';

const redirectReducer = (state = null, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_REDIRECT:
            return { payload: action.payload }  
        default:
            return { payload: false };
    }
};

export default redirectReducer;