import axios from "axios";

//TODO: change the port to be dynamic based on env
export default axios.create({
    baseURL: "http://localhost:3001/api"
})