'use client';

import LocationDateReserve from './LocationDateReserve';
import { useState } from 'react';
import bookingCar from '../libs/bookingCar';
export default function CarDetail({ car, choosing, setChoosing }: any) {
  const [date, onDateChange] = useState('');
  const [location, onLocationChange] = useState('');

  const onBooking = async () => {};
  return (
    <div
      className={`bg-white absolute right-0 p-2 flex-col ${
        choosing
          ? 'translate-y-0 duration-1000 delay-1000'
          : 'translate-y-[-100%] duration-1000'
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
          onBooking();
        }}
      >
        Reserve
      </button>
    </div>
  );
}
