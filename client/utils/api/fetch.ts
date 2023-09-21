import axios from 'axios';

// Create an Axios instance
const axiosInstance = axios.create({
    baseURL: 'http://localhost:8001/api/v1/', // Your API base URL
});

// Add request interceptor
axiosInstance.interceptors.request.use(
    (config) => {
        const newConfig = { ...config };
        const token = localStorage.getItem('access_token');
        if (token) {
            newConfig.headers.Authorization = `Bearer ${token}`;
        }
        return newConfig;
    },
    (error) => Promise.reject(error)
);

// Add response interceptor
axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => Promise.reject(error)
);

export default axiosInstance;