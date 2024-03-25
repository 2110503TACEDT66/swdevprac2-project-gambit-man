'use client';
import { useState } from 'react';
import styles from './banner.module.css';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';

export default function Banner() {
  const router = useRouter();

  const { data: session } = useSession();
  console.log(session?.user.token);
  return (
    <div>
      <div className="carousel w-full">
  <div id="item1" className="carousel-item w-full">
    <img src="/img/a1.jpg" className="w-full" />
  </div> 
  <div id="item2" className="carousel-item w-full">
    <img src="/img/a2.jpg" className="w-full" />
  </div> 
  <div id="item3" className="carousel-item w-full">
    <img src="/img/a3.jpg" className="w-full" />
  </div> 
</div> 
<div className="flex justify-center w-full py-2 gap-2">
  <a href="#item1" className="btn btn-xs">1</a> 
  <a href="#item2" className="btn btn-xs">2</a> 
  <a href="#item3" className="btn btn-xs">3</a> 
</div>
      <button
        className="bg-white text-cyan-600 border border-cyan-600
            font-semibold py-2 px-2 m-2 rounded z-30 top-20 right-10 fixed
            hover:bg-cyan-600 hover:text-white hover:border-transparent "
        onClick={(e) => {
          e.stopPropagation();
          router.push('/car');
        }}
      >
        Select Your Travel Parner NOW
      </button>
    </div>
  );
}
