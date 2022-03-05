import axios from "axios";
const axiosInstance = axios.create({ baseURL: "https://dev-api.zcode.id" });

export default axiosInstance;
