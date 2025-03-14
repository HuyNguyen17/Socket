import axios from "axios";

//TODO: change the port to be dynamic based on env
 const api = axios.create({
    baseURL: "http://localhost:3001/api"
})

//code adapted from https://medium.com/@barisberkemalkoc/axios-interceptor-intelligent-db46653b7303*/
//request interceptor to send tokem with requests
api.interceptors.request.use(config => {
    const authToken = localStorage.getItem('authToken');
    if (authToken) {
      config.headers.Authorization = `${authToken}`;
    }
    return config;
});

export default api;