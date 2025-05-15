//API calls for availability management
import {API_URL} from './config';

export const setAvailability = async (time, service, token) => {
  try {
    const response = await fetch(`${API_URL}/availability`, {  // ✅ Uses API_URL
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ time, service }),
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    return response.json();
  } catch (error) {
    console.error("Error saving availability:", error);
    throw error;
  }
};



export async function getAvailability() {
  const res = await fetch(`${API_URL}/availability`);
  return await res.json();
}

export async function addAvailability(data, token) {
  const res = await fetch(`${API_URL}/availability`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  });

  return await res.json();
}

export async function deleteAvailability(id, token) {
  const res = await fetch(`${API_URL}/availability/${id}`, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return await res.json();
}
