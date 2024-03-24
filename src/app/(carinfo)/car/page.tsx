'use client';

import { Canvas } from '@react-three/fiber';
import { Car } from '@/src/models/Car';
import Loader from '@/src/components/Loader';

export default function Page() {
  return (
    <section className="w-full h-screen relative">
      <Canvas className="w-full h-screen bg-transparent">
        <directionalLight position={[1, 1, 1]} intensity={2} />
        <ambientLight intensity={1} />
        <pointLight position={[1, 5, 10]} intensity={2} />
        <spotLight
          position={[0, 50, 10]}
          angle={0.15}
          penumbra={1}
          intensity={2}
        />
        <hemisphereLight groundColor="#000000" intensity={1} />
        <Car position={[0, -1, -0.5]} scale={1} rotation={[0.1, 0.5, 0]} />
      </Canvas>
    </section>
  );
}
