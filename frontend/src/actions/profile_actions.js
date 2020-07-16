export const RECEIVE_PROFILE = 'RECEIVE_PROFILE';
export const RECEIVE_PROFILE_ERRORS = 'RECEIVE_PROFILE_ERRORS';
export const CLEAR_PROFILE = 'CLEAR_PROFILE';

export const receiveProfile = (profileValue) => {
    return ({
        type: RECEIVE_PROFILE,
        profileValue
    });
};

export const clearProfile = () => {
    return ({
        type: CLEAR_PROFILE,
    })
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
    if (stocks) {
        console.log(value);
        dispatch(receiveProfile(value));
    }
}