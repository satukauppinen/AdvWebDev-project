// src/api/authApi.js
import { API_URL } from "./config";
export const loginAdmin = async (username, password) => {

  


  const response = await fetch(`${API_URL}/admin/login`, {

    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password }),
  });

  if (!response.ok) throw new Error('Login failed');
  return response.json();
};
