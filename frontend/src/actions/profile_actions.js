import * as APIUtil from '../util/session_api_util';
export const RECEIVE_PROFILE = 'RECEIVE_PROFILE';
export const RECEIVE_PROFILE_ERROR = 'RECEIVE_PROFILE_ERROR';
export const CLEAR_PROFILE = 'CLEAR_PROFILE';
export const RECEIVE_PROFILE_STAT = 'RECEIVE_PROFILE_STAT'

export const receiveProfileError = profileError => {
    return ({
        type:RECEIVE_PROFILE_ERROR,
        profileError
    })
}

export const receiveProfile = (profileValue) => {
    return ({
        type: RECEIVE_PROFILE,
        profileValue
    });
};

export const receiveProfileStat = profileValueStat => {
    return ({
        type: RECEIVE_PROFILE_STAT,
        profileValueStat
    })
}

export const clearProfile = () => {
    return ({
        type: CLEAR_PROFILE,
    })
}

export const buildStat = (user) => dispatch => {
    let userID = {userID: user.data.userID};
    APIUtil.statCreate(userID).then(
        theUser => receiveProfileStat(theUser))
        .catch(error => dispatch(receiveProfileError(error)))
}

export const getStat = userID => dispatch => {
    APIUtil.statFetch(userID).then(
        stat => dispatch(receiveProfileStat(stat.data[0]['value'])))
        .catch(error => dispatch(receiveProfileError(error)))
}

export const buildProfile = (stocks) => dispatch => {
    let profileValue = 0;

    let tickers = Object.keys(stocks);
    for (let i = 0; i < tickers.length -1; i ++) {
        let ticker = stocks[tickers[i]];
        let pricePerShare = ticker['pricePerShare'];
        let numberShares = ticker['ownedShares'];
        let totalValue = numberShares * pricePerShare;
        profileValue += totalValue;
    }
    let value = profileValue;
    dispatch(receiveProfile(value));
}