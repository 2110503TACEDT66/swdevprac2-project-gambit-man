'use client';

import LocationDateReserve from './LocationDateReserve';
import { useState } from 'react';
import addBooking from '../libs/addBooking';
import { useSession } from 'next-auth/react';
import dayjs, { Dayjs } from 'dayjs';
export default function CarDetail({ car, choosing, setChoosing }: any) {
  const [date, onDateChange] = useState<Dayjs>();
  const [location, onLocationChange] = useState('');
  const { data: session } = useSession();

  const booking = async () => {
    if (!session || !date) {
      return;
    }
    try {
      const booking = await addBooking(
        '65e2de815332326d97212cee',
        session.user.token,
        car.name,
        date
      );
      console.log(booking);
    } catch (error) {
      alert(error);
    }
  };
  return (
    <div
      className={`bg-white absolute right-0 p-2 flex-col ${
        choosing
          ? 'translate-y-0 duration-1000 delay-1000'
          : 'translate-y-[-150%] duration-1000'
      }`}
    >
      <form className="flex flex-col">
        <h1>{car.name}</h1>
        <h1>Detail :</h1>
        <LocationDateReserve
          onDateChange={onDateChange}
          onLocationChange={onLocationChange}
        />

        <button type="button" onClick={() => setChoosing(false)}>
          Out
        </button>
      </form>
      <button
        type="button"
        onClick={() => {
          console.log('test');
          booking();
        }}
      >
        Reserve
      </button>
    </div>
  );
}
