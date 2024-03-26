'use client';
import { Canvas } from '@react-three/fiber';
import { Car } from '@/src/models/Car';
import { Garage } from '@/src/models/Garage';
import Loader from '@/src/components/Loader';
import { Suspense, useRef } from 'react';
import { Sky } from '@react-three/drei';
import CarChooser from '@/src/components/CarChooser';
import { useState } from 'react';
import { useGLTF } from '@react-three/drei';
import CarDetail from '@/src/components/CarDetail';
import { cars } from '@/carsInfo';

export default function Page() {
  const [car, setCar] = useState(cars[0]);
  const [choosing, setChoosing] = useState(false);
  const [error, setError] = useState(false);
  const [rentFinish, setRentFinish] = useState(false);
  return (
    <section className="w-full h-screen relative flex flex-row mt-16 justify-center">
      {rentFinish && (
        <div role="alert" className="alert alert-success z-30 fixed mt-8 w-1/3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="stroke-current shrink-0 h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span>Your purchase has been confirmed!</span>
        </div>
      )}
      {error && (
        <div role="alert" className="alert alert-error z-30 fixed mt-8 w-1/3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="stroke-current shrink-0 h-6 w-6 hover:cursor-pointer"
            fill="none"
            viewBox="0 0 24 24"
            onClick={() => setError(false)}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span>Sorry, You can't rent more than 3 cars</span>
        </div>
      )}
      <Canvas
        className="w-full h-screen bg-transparent"
        camera={{
          position: [-7, 1, 3],
          rotation: [0, -1.5, 0],
          near: 0.1,
          far: 1000,
        }}
      >
        <Suspense fallback={<Loader />}>
          <Sky />
          <ambientLight intensity={8} />
          <directionalLight position={[-5, 1, 3]} intensity={3} />
          <Car
            carScene={car.model}
            position={car.position}
            scale={car.scale}
            rotation={car.rotation}
          />
          <Garage position={[10, -1, -7]} scale={0.05} rotation={[0, 3, 0]} />
        </Suspense>
      </Canvas>
      <CarChooser
        cars={cars}
        setCar={setCar}
        setChoosing={setChoosing}
        choosing={choosing}
      />
      <CarDetail
        car={car}
        cart={false}
        choosing={choosing}
        setChoosing={setChoosing}
        setError={setError}
        setRentFinish={setRentFinish}
      />
    </section>
  );
}

cars.forEach((car) => {
  useGLTF.preload(car.model);
});
