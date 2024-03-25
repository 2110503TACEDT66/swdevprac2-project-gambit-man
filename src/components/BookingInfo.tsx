import Image from 'next/image';
import dayjs from 'dayjs';
export default function BookingInfo({ car, bookingDate, provider }: any) {
  return (
    <div className="card card-compact w96 bg-base-100 shadow-xl">
      <figure>
        <Image src={`/img/${car.picture}`} alt="Car" width={400} height={400} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{car.name}</h2>
        <p>BookingDate: {dayjs(bookingDate).format('DD/MM/YYYY')}</p>
        <p>Car Rental: {provider.name}</p>
        <p>Contact: {provider.tel}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-outline btn-accent">Edit</button>
          <button className="btn btn-outline btn-error">Delete</button>
        </div>
      </div>
    </div>
  );
}
