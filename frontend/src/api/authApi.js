// src/api/authApi.js
export const loginAdmin = async (username, password) => {

  const API_URL = 'http://localhost:5000/api';


  const response = await fetch(`${API_URL}/login`, {

    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password }),
  });

  if (!response.ok) throw new Error('Login failed');
  return response.json();
};
