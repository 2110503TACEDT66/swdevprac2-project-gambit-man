'use client';
import myImage from '@/public/img/door.jpg';
import Image from 'next/image';
import { useState } from 'react';

const InitialTransition = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  return (
    <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
      <Image
        src={myImage}
        alt="My Image"
        className={`w-full h-screen transition-all duration-1000 ${
          isLoaded ? 'translate-y-[-100%]' : 'translate-y-0'
        }`}
        onClick={() => setIsLoaded(!isLoaded)}
      />
    </div>
  );
};

export default InitialTransition;
