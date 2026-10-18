// Base URL for the backend API.
// Override in production by setting VITE_API_URL in a .env file, e.g.
//   VITE_API_URL=https://api.gleamgroupint.com/api
const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

export default API_BASE;
