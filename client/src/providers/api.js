import axios from 'axios';

const baseURL = 'http://localhost:4000';

export const api = {
    get: url => axios.get(`${baseURL}${url}`),
    post: url => axios.post(`baseURL${url}`),
    put: url => axios.put(`baseURL${url}`),
    delete: url => axios.delete(`baseURL${url}`)
}