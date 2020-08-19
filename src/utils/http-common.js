import axios from 'axios';
import { buscarToken } from "../Service/Auth";

//Define a URL base da origem para consumo do servico
const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL || "http://localhost:3000",
  headers: {
    'Content-type': 'application/json',
  },
});

//Adicionando o token de autorizacao
api.interceptors.request.use(async config => {
  const token = await buscarToken();
  
  if (token) {
      config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default api;
