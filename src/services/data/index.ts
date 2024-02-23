import axios from "axios";

const API_KEY = "70b6a237c7e0474e828a590fae6134b7";
const BASE_URL = "https://newsapi.org/v2";

const client = axios.create({
  baseURL: BASE_URL,
});

client.interceptors.request.use((config) => {
  config.params = {
    apiKey: API_KEY,
    ...config.params,
  };
  return config;
});

export default client;
