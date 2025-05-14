// src/api/authApi.js
//API calls for authentication, specifically for admin login
import { API_URL } from "./config";

export const loginAdmin = async (username, password) => {
  const response = await fetch(`${API_URL}/admin/login`, { // ✅ Corrected path
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password }),
  });

  if (!response.ok) throw new Error('Login failed'); // ✅ Still handles failed login
  return response.json();
};
