import axios from 'axios';

const API_URL = 'https://video-backend-mu.vercel.app/';

// Registrar nuevo usuario
const register = async (data) => {
  console.log(
    data
  )
  const response = await axios.post(API_URL + 'api/users/signup/', data); 
  
  return response.data;
};

// Iniciar sesión
const login = async (data) => {
  const response = await axios.post(API_URL + 'api/users/login/', data);
  
  if (response) {
    localStorage.setItem('user', JSON.stringify(response.data));
  }
  
  return response.data;
};

// Cerrar sesión
const logout = () => {
  localStorage.removeItem('user');
};

const authService = {
  register,
  login,
  logout,
};

export default authService;
