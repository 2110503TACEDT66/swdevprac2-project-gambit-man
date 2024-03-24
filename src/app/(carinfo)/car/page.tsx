import { Canvas } from '@react-three/fiber';
import { Car } from '@/models/Car';
export default async function Page() {
  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Car />
    </Canvas>
  );
}
