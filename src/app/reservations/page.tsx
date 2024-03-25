'use client';
import LocationDateReserve from '@/src/components/LocationDateReserve';
import { useSearchParams } from 'next/navigation';
import { useState } from 'react';
import dayjs, { Dayjs } from 'dayjs';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/src/redux/store';
import { addReservation } from '@/src/redux/features/cartSlice';
import { ReservationItem } from '../../../interfaces';
import addBooking from '@/src/libs/addBooking';
import { useSession } from 'next-auth/react';
export default function Reservations() {
  const urlParams = useSearchParams();
  const cid = urlParams.get('id');
  const model = urlParams.get('model');

  const {data:session} = useSession()

  

  const dispatch = useDispatch<AppDispatch>();

  const makeReservation = () => {
    if (cid && model && pickupDate && returnDate) {
      const item: ReservationItem = {
        carId: cid,
        CarModel: model,
        numOfDays: returnDate.diff(pickupDate, 'day'),
        pickupDate: dayjs(pickupDate).format('YYYY/MM/DD'),
        pickupLocation: pickupLocation,
        returnDate: dayjs(returnDate).format('YYYY/MM/DD'),
        returnLocation: returnLocation,
      };
      dispatch(addReservation(item));
    }
  };

  const [pickupDate, setPickupDate] = useState<Dayjs | null>(null);
  const [pickupLocation, setPickupLocation] = useState<string>('BKK');
  const [returnDate, setReturnDate] = useState<Dayjs | null>(null);
  const [returnLocation, setReturnLocation] = useState<string>('BKK');

  // await addBooking("abcdefg12487",session.data?.user.token,"tuck",pickupDate)

  return (
    <main className="w-[100%] flex flex-col items-center space-y-4">
      <div className="text-xl font-medium">New Reservation</div>
      <div className="text-xl font-medium">Car: {model}</div>

      <div className="w-fit space-y-2">
        <div className="text-md text-left text-gray-600">
          Pick-Up Date and Location
        </div>
        <LocationDateReserve
          onDateChange={(value: Dayjs) => {
            setPickupDate(value);
          }}
          onLocationChange={(value: string) => {
            setPickupLocation(value);
          }}
        />
        <div className="text-md text-left text-gray-600">
          Return Date and Location
        </div>
        <LocationDateReserve
          onDateChange={(value: Dayjs) => {
            setReturnDate(value);
          }}
          onLocationChange={(value: string) => {
            setReturnLocation(value);
          }}
        />
      </div>

      <button
        className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-2 text-white shadow"
        // onClick={makeReservation}
        onClick={makeReservation}
      >
        Reserve this car
      </button>
    </main>
  );
}
