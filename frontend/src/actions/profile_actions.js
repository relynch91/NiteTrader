import * as APIUtil from '../util/profile_api_util';
export const RECEIVE_PROFILE_VALUE = 'RECEIVE_PROFILE';
export const RECEIVE_PROFILE_ERROR = 'RECEIVE_PROFILE_ERROR';
export const CLEAR_PROFILE = 'CLEAR_PROFILE';
export const RECEIVE_PROFILE_STAT = 'RECEIVE_PROFILE_STAT';
export const RECEIVE_PROFILE_STAT_UPDATE = 'RECEIVE_PROFILE_STAT_UPDATE';

export const RECEIVE_PROFILE_VALUES = 'RECEIVE_PROFILE_VALUES';

export const receiveProfileError = profileError => {
    return ({
        type:RECEIVE_PROFILE_ERROR,
        profileError
    })
}

export const receiveProfileValue = (profileValue) => { //value
    return ({
        type: RECEIVE_PROFILE_VALUE,
        profileValue
    });
};

export const receiveProfileStat = profileValueStat => { //cash
    return ({
        type: RECEIVE_PROFILE_STAT,
        profileValueStat
    })
}

export const receiveProfileStatUpdate = profileValueStat => { //cash
    return ({
        type: RECEIVE_PROFILE_STAT_UPDATE,
        profileValueStat
    })
}

export const receiveProfileValues = profileValues => { // array of values
    return ({
        type: RECEIVE_PROFILE_VALUES,
        profileValues
    })
}

export const clearProfile = () => {
    return ({
        type: CLEAR_PROFILE,
    })
}
// create stat db entry when user signs up
export const buildStat = (user) => dispatch => { 
    let userID = {userID: user.data.userID};
    APIUtil.statCreate(userID).then(
        theUser => receiveProfileStat(theUser))
        .catch(error => dispatch(receiveProfileError(error)))
}
// returns stat db request on login
export const getStat = userID => dispatch => { 
    APIUtil.statFetch(userID)
        .then(
            stat => dispatch(receiveProfileStat(stat.data[0]['value']))
        ).catch(
            error => dispatch(receiveProfileError(error))
        )
}

export const updateStat = update => dispatch => {

    APIUtil.statUpdate(update).then(
        updated => dispatch(receiveProfileStatUpdate(updated)))
        .catch(error => dispatch(receiveProfileError(error)))
}

//returns value of all currently owned stocks
export const buildProfile = (stocks) => dispatch => { 
    let profileValue = 0;
    if (!stocks) {
        return null;
    }
    let tickers = Object.keys(stocks);
    for (let i = 0; i < tickers.length; i ++) {
        let ticker = stocks[tickers[i]];
        let pricePerShare = ticker['pricePerShare'];
        let numberShares = ticker['ownedShares'];
        let totalValue = numberShares * pricePerShare;
        profileValue += totalValue;
    }
    let value = profileValue;
    dispatch(receiveProfileValue(value));
}

export const getProfileValues = userID => dispatch => {
    APIUtil.profilesFetch(userID).then(
        profiles => dispatch(receiveProfileValues(profiles.data)))
        .catch(error => dispatch(receiveProfileError(error)))
}
