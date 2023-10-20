import axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'http://localhost:3000/',
});
axiosInstance.interceptors.response.use((res) => {
    return res.data;
})
export default axiosInstance;