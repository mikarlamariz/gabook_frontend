import axios from "axios";

const url = process.env.REACT_APP_API_URL;
const port = process.env.REACT_APP_API_PORT;

const AxiosBase = axios.create({
    baseURL: `${url}:${port}/`,
    timeout: 30000,
    headers: {
        "Content-Type": "application/json",
    },
});

export default AxiosBase;