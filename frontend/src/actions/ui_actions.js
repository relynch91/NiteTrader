export const RECEIVE_REDIRECT = 'RECEIVE_REDIRECT';

export const receiveRedirect = link => {
    return ({
        type: RECEIVE_REDIRECT,
        payload: link
    })
}