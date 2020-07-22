import {
    RECEIVE_PROFILE,
    CLEAR_PROFILE,
    RECEIVE_PROFILE_STAT
} from '../actions/profile_actions';

const ProfileReducer = (state = {}, action) => {

    Object.freeze(state);
    let nextState = Object.assign({}, state);

    switch (action.type) {
        case RECEIVE_PROFILE:
            Object.assign(nextState, {
                profileValue: action.profileValue
            })
            return nextState
        case RECEIVE_PROFILE_STAT:
            Object.assign(nextState, {
                profileValueStat: action.profileValueStat
            })
            return nextState;
        case CLEAR_PROFILE:
            return {}
        default:
            return state;
    }
};

export default ProfileReducer;