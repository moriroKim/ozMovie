import axios from "axios";

axios.defaults.withCredentials = true;
const BASE_URL = import.meta.env.VITE_API_URL;

export const instance = axios.create({
  baseURL: `${BASE_URL}`,
});
