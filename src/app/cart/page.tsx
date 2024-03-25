'use client';

import getBookings from '@/src/libs/getBookings';
import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import { cars } from '@/carsInfo';
import Image from 'next/image';
import { Canvas } from '@react-three/fiber';
import { Stand } from '@/src/models/Stand';
import { Sky } from '@react-three/drei';
export default function CartPage() {
  const { data: session } = useSession();
  const [books, setBooks] = useState([]);
  useEffect(() => {
    const fetchBooks = async () => {
      if (!session) {
        return;
      }
      try {
        const fetchedBooks = await getBookings(session.user.token);
        setBooks(fetchedBooks.data);
        console.log(fetchedBooks.data);
      } catch (error) {
        console.error('Error fetching books:', error);
      }
    };
    fetchBooks();
  }, [session]);
  return (
    <main>
      <div className="w-full h-screen">
        <Canvas>
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
        </Canvas>
      </div>
    </main>
  );
}
