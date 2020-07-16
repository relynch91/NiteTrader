import {
    RECEIVE_PROFILE,
    CLEAR_PROFILE
} from '../actions/profile_actions';

const ProfileReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);
    // debugger
    // console.log(' at the reducer')
    switch (action.type) {
        case RECEIVE_PROFILE:
            return Object.assign(nextState, action.stocks);
        case CLEAR_PROFILE:
            return {}
        default:
            return state;
    }
};

export default ProfileReducer;