import axios from "axios";
// export const CONTEST_ID = "96e83";

// const gmailEmail = functions.config().gmail.email || process.env.REACT_APP_GMAIL_EMAIL;
// const gmailPassword = functions.config().gmail.password || process.env.REACT_APP_GMAIL_PASSWORD;
// 





export const API_URL = "https://prasadkumar.pythonanywhere.com";
// export const API_URL = "http://127.0.0.1";


const axiosNoAuthInstance = axios.create({
    baseURL: API_URL,
});

const axiosAuthInstance = axios.create({
    baseURL: API_URL,
});

axiosAuthInstance.interceptors.request.use(
    (config) => {
        if(localStorage.getItem("TOKEN")){
            config.headers.Authorization = `Bearer ${localStorage.getItem("TOKEN")}`;
        }        
        return config;
    },
    (error) => {
        
        return Promise.reject(error);
    }
)



export {axiosAuthInstance, axiosNoAuthInstance};
