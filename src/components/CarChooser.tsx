import Image from 'next/image';
import { div } from 'three/examples/jsm/nodes/Nodes.js';

export default function CarChooser({
  cars,
  setCar,
  setChoosing,
  choosing,
}: any) {
  return (
    <div
      className={`bg-transparent absolute right-0 p-2 flex-col ${
        choosing
          ? 'translate-y-[-150%] duration-1000'
          : 'translate-y-0 duration-1000 delay-1000'
      }`}
    >
      <h1 className="text-2xl text-center bg-white rounded-xl">Choose Car</h1>
      {cars.map((car: any) => (
        <div
          className="flex cursor-pointer"
          key={car.id}
          onClick={() => {
            setCar(car);
          }}
        >
          <div className="flex flex-col m-2 bg-white w-[175px] rounded-lg items-center text-center">
            <p className="p-2 text-xl font-bold">{car.name}</p>
            <Image
              src={`/img/${car.picture}`}
              alt={car.name}
              width={100}
              height={100}
              className="m-2"
            />
          </div>
        </div>
      ))}
      <button onClick={() => setChoosing(true)}>Choose</button>
    </div>
  );
}
