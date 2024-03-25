import Image from 'next/image';

export default function BookingInfo({ car }: any) {
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <figure>
        <img src="/img/car1.png" alt="Car" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{car}</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          <button className="btn btn-outline btn-accent">Edit</button>
          <button className="btn btn-outline btn-error">Delete</button>
        </div>
      </div>
    </div>
  );
}
