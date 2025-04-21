import API_URL from './config';

export async function getAvailability() {
  const res = await fetch(`${API_URL}/api/availability`);
  return await res.json();
}

export async function addAvailability(data, token) {
  const res = await fetch(`${API_URL}/api/availability`, {
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
  const res = await fetch(`${API_URL}/api/availability/${id}`, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return await res.json();
}
