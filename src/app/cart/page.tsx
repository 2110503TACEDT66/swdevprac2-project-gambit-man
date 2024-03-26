'use client';

import getBookings from '@/src/libs/getBookings';
import { useSession } from 'next-auth/react';
import { useEffect, useRef, useState } from 'react';
import BookingInfo from '@/src/components/BookingInfo';
import { cars } from '@/carsInfo';
export default function CartPage() {
  const { data: session } = useSession();
  const [books, setBooks] = useState([]);
  const [count, setCount] = useState(0);
  useEffect(() => {
    const fetchBooks = async () => {
      if (!session) {
        return;
      }
      try {
        const fetchedBooks = await getBookings(session.user.token);
        setBooks(fetchedBooks.data);
        setCount(fetchedBooks.data.length);
      } catch (error) {
        console.error('Error fetching books:', error);
      }
    };
    fetchBooks();
  }, [session, count]);

  const booksInfo = books.map((book: any) => {
    console.log(book.car);
    const car = cars.find((car) => car.name === book.car);
    return {
      ...book,
      car,
    };
  });
  console.log(booksInfo);

  return (
    <main className="flex flex-col gap-8 m-8 items-center mt-20">
      {booksInfo.map((book: any) => (
        <BookingInfo
          key={book._id}
          car={book.car}
          bookingDate={book.BookingDate}
          provider={book.provider}
          bookingID={book._id}
          count={count}
          setCount={setCount}
          user={book.user}
        />
      ))}
    </main>
  );
}
