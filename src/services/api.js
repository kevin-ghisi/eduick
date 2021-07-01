import axios from 'axios';


// create a base call for the API;
export const api = axios.create({
    baseURL: 'http://localhost:3333/'
})