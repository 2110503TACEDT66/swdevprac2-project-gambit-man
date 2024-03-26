'use client';
import Image from 'next/image';
import dayjs, { Dayjs } from 'dayjs';
import { useState, useEffect } from 'react';
import { cars } from '@/carsInfo';
import getProvider from '../libs/getProvider';
import { useSession } from 'next-auth/react';
import DateReserve from './DateReserve';
import upDateBooking from '../libs/upDateBooking';
import deleteBooking from '../libs/deleteBooking';
import { useRouter } from 'next/navigation';
export default function BookingInfo({
  car,
  bookingDate,
  provider,
  bookingID,
  count,
  setCount,
}: any) {
  const { data: session } = useSession();
  const [providers, setProviders] = useState([]);
  const [editing, setEditing] = useState(false);
  const [selectedCar, setSelectedCar] = useState(car);
  const [selectedProvider, setSelectedProvider] = useState(provider);
  const [date, setDate] = useState<Dayjs>(bookingDate);
  const router = useRouter();

  const handleChangeCar = (name: string) => {
    const car = cars.find((car) => car.name === name);
    setSelectedCar(car);
  };

  const handleChangeProvider = (name: string) => {
    const provider = providers.find((provider: any) => provider.name === name);
    setSelectedProvider(provider);
  };

  const handleDelete = async () => {
    try {
      if (!session) {
        return;
      }
      console.log(bookingID, session.user.token);
      await deleteBooking(bookingID, session.user.token);
      setCount((prevCount: number) => prevCount - 1);
      router.refresh();
    } catch (error) {
      console.log(error);
    }
  };

  const updateBooking = async () => {
    try {
      if (!session) {
        return;
      }
      const bookingEdit = {
        BookingDate: date,
        user: session.user.data._id,
        provider: selectedProvider._id,
        car: selectedCar.name,
        createAt: dayjs(),
      };

      const updatedBooking = await upDateBooking(
        session?.user.token,
        bookingID,
        bookingEdit
      );
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const fetchProviders = async () => {
      if (!session) {
        return;
      }
      const providers = await getProvider(session.user.token);
      setProviders(providers.data);
    };
    fetchProviders();
  }, []);
  return (
    <div className="card card-compact w96 bg-base-100 shadow-xl">
      <figure>
        {editing ? (
          <Image
            src={`/img/${selectedCar.picture}`}
            alt="Car"
            width={400}
            height={400}
          />
        ) : (
          <Image
            src={`/img/${selectedCar.picture}`}
            alt="Car"
            width={400}
            height={400}
          />
        )}
      </figure>
      <div className="card-body">
        {editing ? (
          <div className="card-body">
            <h2 className="card-title">Select Car</h2>
            <select
              className="select select-info w-full max-w-xs"
              onChange={(e: any) => {
                handleChangeCar(e.target.value);
              }}
            >
              <option disabled selected>
                Select Car
              </option>
              {cars.map((car: any) => (
                <option key={car.name} value={car.name}>
                  {car.name}
                </option>
              ))}
            </select>
            <h2 className="card-title">Select Reservation Date</h2>
            <DateReserve onDateChange={setDate} />
            <h2 className="card-title">Select Provider</h2>
            <select
              className="select select-warning w-full max-w-xs"
              onChange={(e: any) => handleChangeProvider(e.target.value)}
            >
              <option disabled selected key={provider.name}>
                Select Provider
              </option>
              {providers.map((provider: any) => (
                <option key={provider.name} value={provider.name}>
                  {provider.name}
                </option>
              ))}
            </select>
          </div>
        ) : (
          <div className="card-body">
            <h2 className="card-title">{selectedCar.name}</h2>
            <p>BookingDate: {dayjs(date).format('DD/MM/YYYY')}</p>
            <p>Car Rental: {selectedProvider.name}</p>
            <p>Contact: {selectedProvider.tel}</p>
          </div>
        )}

        <div className="card-actions justify-end">
          {editing ? (
            <button
              className="btn btn-outline btn-accent"
              onClick={() => {
                setEditing(false);
                updateBooking();
              }}
            >
              Finish
            </button>
          ) : (
            <button
              className="btn btn-outline btn-accent"
              onClick={() => setEditing(true)}
            >
              Edit
            </button>
          )}
          <button
            type="button"
            className="btn btn-outline btn-error"
            onClick={() => {
              handleDelete();
            }}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
