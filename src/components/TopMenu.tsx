import { getServerSession } from 'next-auth';
import { authOptions } from '@/src/app/api/auth/[...nextauth]/route';
import Link from 'next/link';
export default async function TopMenu() {
  const session = await getServerSession(authOptions);
  return (
    <div className="navbar bg-base-100 z-20 sticky">
      <div className="flex-1">
        <Link className="btn btn-ghost text-xl" href="/">
          Home
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            {session ? (
              <Link href="/api/auth/signout">Sign Out</Link>
            ) : (
              <Link href="/api/auth/signin">Sign In</Link>
            )}
          </li>
          <li>
            <Link href="/register">Register</Link>
          </li>
          <li>
            <details className="mx-7">
              <summary>Menu</summary>
              <ul className="p-2 bg-base-100 rounded-t-none z-10">
                <li>
                  <Link href={'/car'}>Select Car</Link>
                </li>
                <li>
                  <Link href={'/cart'}>Reservations</Link>
                </li>
                <li>
                  <Link href={'/profile'}>Profile</Link>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </div>
  );
}
