'use client';

import { Canvas } from '@react-three/fiber';
import { Car } from '@/src/models/Car';
import { Garage } from '@/src/models/Garage';
import Loader from '@/src/components/Loader';
import carScene from '@/public/assets/car2.glb';
import { Suspense, useRef } from 'react';
import { Sky } from '@react-three/drei';
import CarChooser from '@/src/components/CarChooser';

export default function Page() {
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
          <SceneContent />
        </Suspense>
      </Canvas>
      <CarChooser />
    </section>
  );
}

function SceneContent() {
  return (
    <>
      <Sky />
      <ambientLight intensity={2} />
      <directionalLight position={[-5, 1, 3]} intensity={3} />
      <Car
        carScene={carScene}
        position={[-0.5, -0.5, 1.2]}
        scale={1}
        rotation={[0, -1.8, 0]}
      />
      <Garage position={[10, -1, -7]} scale={0.05} rotation={[0, 3, 0]} />
    </>
  );
}
