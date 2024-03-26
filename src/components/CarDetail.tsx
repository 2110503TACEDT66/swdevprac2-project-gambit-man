'use client';

import DateReserve from './DateReserve';
import { useState } from 'react';
import addBooking from '../libs/addBooking';
import { useSession } from 'next-auth/react';
import dayjs, { Dayjs } from 'dayjs';
import getProvider from '../libs/getProvider';
import { useEffect } from 'react';
export default function CarDetail({
  car,
  choosing,
  setChoosing,
  setError,
  setRentFinish,
}: any) {
  const [date, onDateChange] = useState<Dayjs>();
  const { data: session } = useSession();
  const [providers, setProviders] = useState([]);
  const [selectedProvider, setSelectedProvider] = useState<any>();

  const handleChangeProvider = (name: string) => {
    const provider = providers.find((provider: any) => provider.name === name);
    setSelectedProvider(provider);
  };
  const booking = async () => {
    if (!session || !date || !selectedProvider) {
      return;
    }
    try {
      const booking = await addBooking(
        selectedProvider._id,
        session.user.token,
        car.name,
        date
      );
      console.log(booking);
      setRentFinish(true);
      setTimeout(() => {
        setRentFinish(false);
      }, 1000);
    } catch (error) {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 1000);
    }
  };

  useEffect(() => {
    const fetchProviders = async () => {
      if (!session) {
        return;
      }
      const providers = await getProvider(session.user.token);
      setProviders(providers.data);
      setSelectedProvider(providers.data[0]);
    };
    fetchProviders();
  }, []);
  return (
    <div
      className={`bg-white fixed right-0 p-2 flex-col ${
        choosing
          ? 'translate-y-0 duration-1000 delay-1000'
          : 'translate-y-[-150%] duration-1000'
      }`}
    >
      <form className="flex flex-col font-sans gap-y-2">
        <h1 className="text-xl text-center font-bold">{car.name}</h1>
        <h1 className="label-text">BookingDate</h1>
        <DateReserve onDateChange={onDateChange} />
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Choose Provider</span>
          </div>
          <select
            className="select select-bordered"
            onChange={(e) => handleChangeProvider(e.target.value)}
          >
            {providers.map((provider: any) => (
              <option key={provider.name} value={provider.name}>
                {provider.name}
              </option>
            ))}
          </select>
          <div className="label"></div>
        </label>
      </form>
      <button
        type="button"
        className="btn btn-outline btn-info mx-2"
        onClick={() => {
          booking();
        }}
      >
        Reserve
      </button>
      <button
        type="button"
        className="btn btn-outline btn-error"
        onClick={() => setChoosing(false)}
      >
        Back
      </button>
    </div>
  );
}
