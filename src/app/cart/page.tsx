'use client';

import getBookings from '@/src/libs/getBookings';
import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import BookingInfo from '@/src/components/BookingInfo';
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
    <main className="flex flex-col gap-8 m-8 items-center">
      {books.map((book: any) => (
        <BookingInfo key={book._id} car={book.car} />
      ))}
    </main>
  );
}
