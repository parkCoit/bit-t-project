import axios from 'axios'
const server = `http://localhost:8000`
export const postMainApi = req => axios.post(`${server}/main/users/serch`, req) 
export const getMainApi = req => axios.get(`${server}/main/users/serch`, req)      