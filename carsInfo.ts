import car1 from '@/public/assets/car1.glb';
import car2 from '@/public/assets/car2.glb';
import car3 from '@/public/assets/car3.glb';
import car4 from '@/public/assets/car4.glb';

export const cars = [
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
