import axios from "axios";

const BASE_URL = "http://http://classto.net/";
const api = axios.create({
    baseURL: BASE_URL
})

export default api;