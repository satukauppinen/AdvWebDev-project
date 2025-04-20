export const setAvailableTimes = async (token, times) => {
    const response = await fetch('/api/available-times', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ times }),
    });
    if (!response.ok) throw new Error('Failed to save available times');
    return response.json();
  };
  