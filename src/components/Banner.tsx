'use client';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';

export default function Banner() {
  const router = useRouter();

  const { data: session } = useSession();
  return (
    <div className="diff aspect-[16/9]">
      <div className="diff-item-1">
        <img alt="cover" src="/img/a1.jpg" />
      </div>
      <div className="diff-item-2">
        <img alt="daisy" src="/img/a2.jpg" />
      </div>
      <div className="diff-resizer"></div>
    </div>
  );
}
