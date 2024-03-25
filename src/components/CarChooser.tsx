import Image from 'next/image';
import { div } from 'three/examples/jsm/nodes/Nodes.js';

export default function CarChooser({ cars, setCar }: any) {
  return (
    <div className="bg-white absolute right-0 p-2 flex-col">
      <h1 className="text-2xl text-center">Choose Car</h1>
      {cars.map((car: any) => (
        <div
          className="flex cursor-pointer"
          key={car.id}
          onClick={() => {
            setCar(car);
          }}
        >
          <Image
            src={`/img/${car.picture}`}
            alt={car.name}
            width={100}
            height={100}
            className="m-2"
          />
          <p className="m-2 text-xl my-auto">{car.name}</p>
        </div>
      ))}
    </div>
  );
}
