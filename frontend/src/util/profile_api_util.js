import axios from 'axios';

export const statCreate = username => {
    return axios.post('/api/stat/new', username)
}

export const statFetch = userID => {
    return axios.get(`/api/stat/${userID}`)
}

export const profilesFetch = userID => {
    return axios.get(`/api/profile/${userID}`);
}