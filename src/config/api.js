// API Configuration
const API_BASE_URL = process.env.REACT_APP_API_URL || 'https://store-backend-nine-opal.vercel.app';

export const API_ENDPOINTS = {
  RESERVATIONS: `${API_BASE_URL}/api/reservations`,
  TENT: `${API_BASE_URL}/api/tent`,
  UN1: `${API_BASE_URL}/api/un1`,
  UN2: `${API_BASE_URL}/api/un2`,
  UN3: `${API_BASE_URL}/api/un3`,
  UN4: `${API_BASE_URL}/api/un4`,
  UN5: `${API_BASE_URL}/api/un5`,
};

export default API_BASE_URL;
