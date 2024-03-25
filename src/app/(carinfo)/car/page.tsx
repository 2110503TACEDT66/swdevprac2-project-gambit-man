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
  return (
    <section className="w-full h-screen relative flex flex-row">
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
      <CarDetail car={car} choosing={choosing} setChoosing={setChoosing} />
    </section>
  );
}

cars.forEach((car) => {
  useGLTF.preload(car.model);
});
