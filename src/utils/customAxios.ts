import axios from "axios";

const customAxios = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

customAxios.interceptors.request.use((config) => {
  let token = window.localStorage.getItem("token");
  if (token) {
    token = JSON.parse(token);
  }
  if (config.headers) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default customAxios;
