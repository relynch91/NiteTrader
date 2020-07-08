import axios from 'axios';

export const setAuthToken = token => {
    if (token) {
        axios.defaults.headers.common['Authorization'] = token;
    } else {
        delete axios.defaults.headers.common['Authorization'];
    }
};

export const signup = (userData) => {
    const answer = axios.post('/api/users/register', userData);
    return answer
};

export const login = (userData) => {
    return axios.post('/api/users/login', userData);
};