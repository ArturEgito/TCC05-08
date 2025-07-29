const API_BASE_URL = 'http://localhost:8080/api';

export const API_ENDPOINTS = {
  USUARIO: {
    LOGIN: `${API_BASE_URL}/usuario/login`,
    REGISTER: `${API_BASE_URL}/usuario/save`,
    FIND_BY_ID: (id) => `${API_BASE_URL}/usuario/findById/${id}`,
  },
  PRODUTO: {
    FIND_ALL: `${API_BASE_URL}/produto/findAll`,
    FIND_BY_CATEGORIA: (id) => `${API_BASE_URL}/produto/findByCategoria/${id}`,
  },
  CATEGORIA: {
    FIND_ALL: `${API_BASE_URL}/categoria/findAll`,
  },
  PEDIDO: {
    SAVE: `${API_BASE_URL}/pedido/save`,
    FIND_BY_USUARIO: (id) => `${API_BASE_URL}/pedido/findByUsuario/${id}`,
  }
};

export const apiRequest = async (url, options = {}) => {
  const response = await fetch(url, {
    headers: { 'Content-Type': 'application/json' },
    ...options
  });
  return response.json();
};

export default API_BASE_URL;