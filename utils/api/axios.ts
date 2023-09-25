import axios from "axios";

const axiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_SERVER_URL,
});

axiosInstance.interceptors.request.use(
    (config) => {
        const newConfig = { ...config };
        const token = localStorage.getItem('access_token');
        if (token) {
            newConfig.headers.Authorization = `Bearer ${token}`;
        }
        return newConfig;
    },
    (error) => Promise.reject(error.response.data)
    ,
);
axiosInstance.interceptors.response.use(
    (res) => res.data,
    (error) => Promise.reject(error.response.data),
);
export default axiosInstance;
