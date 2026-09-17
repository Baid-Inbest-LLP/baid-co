export const APP_NAME = process.env.NEXT_PUBLIC_APP_NAME || 'Baid & Co';
export const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

const env = {
  appName: APP_NAME,
  apiUrl: API_URL,
};

export default env;
