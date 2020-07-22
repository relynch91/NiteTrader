import axios from 'axios';

export const setAuthToken = token => {
    if (token) {
        axios.defaults.headers.common['Authorization'] = token;
    } else {
        delete axios.defaults.headers.common['Authorization'];
    }
};

export const signup = (userData) => {
    return axios.post('/api/users/register', userData)
};

export const login = (userData) => {
    return axios.post('/api/users/login', userData);
};

export const userIDGet = username => {
    return axios.get('/api/users/finduser', username)
}

export const statCreate = username => {
    return axios.post('/api/stat/new', username)
}