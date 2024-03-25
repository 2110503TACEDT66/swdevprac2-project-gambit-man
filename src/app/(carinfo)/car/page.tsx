'use client';

import { Canvas } from '@react-three/fiber';
import { Car } from '@/src/models/Car';
import { Garage } from '@/src/models/Garage';
import Loader from '@/src/components/Loader';
import { Suspense, useRef } from 'react';
import { Sky } from '@react-three/drei';
import CarChooser from '@/src/components/CarChooser';
import { useState } from 'react';
import car1 from '@/public/assets/car1.glb';
import car2 from '@/public/assets/car2.glb';
import car3 from '@/public/assets/car3.glb';
import car4 from '@/public/assets/car4.glb';
import { useGLTF } from '@react-three/drei';
export default function Page() {
  const cars = [
    {
      id: '001',
      model: car1,
      name: 'Cyberpunk Car',
      picture: 'car1.png',
      position: [-0.5, -0.6, 1.3],
      scale: 0.01,
      rotation: [0, 1.4, 0],
    },
    {
      id: '002',
      model: car2,
      name: 'Lamborghini',
      picture: 'car2.png',
      position: [0.5, 0.1, 0.2],
      scale: 0.6,
      rotation: [0, 1.4, 0],
    },
    {
      id: '003',
      model: car3,
      name: 'Ford Mustang',
      picture: 'car3.png',
      position: [-0.3, -0.6, 1.5],
      scale: 3,
      rotation: [0, -1.8, 0],
    },
    {
      id: '004',
      model: car4,
      name: 'Truck',
      picture: 'car4.png',
      position: [1, 2.7, 1.5],
      scale: 0.03,
      rotation: [0, 3, 0],
    },
  ];
  const [car, setCar] = useState(cars[0]);
  const carRef = useRef(0);
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
      <CarChooser cars={cars} setCar={setCar} />
    </section>
  );
}

useGLTF.preload(car1);
useGLTF.preload(car2);
useGLTF.preload(car3);
useGLTF.preload(car4);
