import axios from 'axios';

export const setAuthToken = token => {
    if (token) {
        axios.defaults.headers.common['Authorization'] = token;
    } else {
        delete axios.defaults.headers.common['Authorization'];
    }
};

export const signup = (userData) => {
    axios.post('/api/users/register', userData).then(
        (answer => console.log(answer))
    )
    // axios.post('/api/users/register', userData).then()
    // console.log(answer);
    // return answer
};

export const login = (userData) => {
    return axios.post('/api/users/login', userData);
};