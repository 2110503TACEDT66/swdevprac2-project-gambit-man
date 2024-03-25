import { Dayjs } from 'dayjs';
export default async function addBooking(
  providerId: string,
  token: string,
  carName: string,
  date: Dayjs
) {
  // await new Promise ((resolve)=>{setTimeout(resolve,5000)})

  const response = await fetch(
    `${process.env.BACKEND_URL}/api/v1/providers/${providerId}/bookings/`,
    {
      method: 'POST',
      headers: {
        authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        BookingDate: date,
        car: carName,
      }),
    }
  );
  if (!response.ok) {
    throw new Error('Cannot get the booking');
  }

  return await response.json();
}
// `http://localhost:5000/api/items/put/${idbox}`
