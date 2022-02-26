import axios from "axios";
import {getApiHost} from "@/utils/urls";

axios.defaults.baseURL = getApiHost();
axios.interceptors.request.use(function (config) {
    const token = localStorage.getItem("access_token");
    if (token) {
        config.headers["Authorization"] = token;
    }
    return config;
});

export default axios;