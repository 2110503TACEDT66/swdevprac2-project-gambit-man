export default async function getBookings(token: string) {
  const response = await fetch(`${process.env.BACKEND_URL}/api/v1/bookings`, {
    next: { tags: ['updatedCars'] },
    method: 'GET',
    headers: {
      authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    const a = await response.json();
    throw new Error(a.message);
  }

  return await response.json();
}
