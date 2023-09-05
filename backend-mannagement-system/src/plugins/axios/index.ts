import Axios from "./Axios";

const axios = new Axios({
    baseURL:'/api',
    timeout:10000,
    headers:{}
})

export {axios}

