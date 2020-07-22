import * as APIUtil from '../util/session_api_util';
import { closeModal } from './modal_actions';
import jwt_decode from 'jwt-decode';
import { clearErrors } from './error_actions';
import { clearPortfolio } from './portfolio_actions';
import { clearProfile } from './profile_actions';
import { clearTransactions } from './transaction_actions';
import { buildStat } from './profile_actions';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
export const RECEIVE_USER_LOGOUT = "RECEIVE_USER_LOGOUT";
export const RECEIVE_USER_SIGN_UP = "RECEIVE_USER_SIGN_UP";

export const receiveCurrentUser = currentUser => ({
    type: RECEIVE_CURRENT_USER,
    currentUser
});

export const receiveUserSignUp = () => ({
    type: RECEIVE_USER_SIGN_UP
});

export const receiveSessionErrors = errors => ({
    type: RECEIVE_SESSION_ERRORS,
    errors
});

export const logoutUser = () => ({
    type: RECEIVE_USER_LOGOUT
});

export const signup = user => dispatch => (
    APIUtil.signup(user)
        .then((user) => (
            console.log(user),
            dispatch(receiveUserSignUp(user)),
            dispatch(clearErrors),
            dispatch(buildStat(user))))
        .catch((err) => (
            dispatch(receiveSessionErrors(err.response.data))
        ))
);

export const login = user => dispatch => (
    APIUtil.login(user).then(res => { const { token} = res.data;
        localStorage.setItem('jwtToken', token);
        APIUtil.setAuthToken(token);
        const decoded = jwt_decode(token);
        dispatch(receiveCurrentUser(decoded));
        dispatch(clearErrors);
        dispatch(closeModal());
    })
    .catch(err => {
        dispatch(receiveSessionErrors(err.response.data));
    })
)

export const logout = () => dispatch => {
    localStorage.removeItem('jwtToken');
    APIUtil.setAuthToken(false);
    dispatch(logoutUser());
    dispatch(clearPortfolio());
    dispatch(clearTransactions());
    dispatch(clearErrors());
    dispatch(clearProfile());
};