'use client';
import { UserRegister } from '@/interfaces';
import userRegister from '@/src/libs/userRegister';
import { redirect } from 'next/navigation';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
export default function Register() {
  const [name, setName] = useState<string | null>(null);
  const [email, setEmail] = useState<string | null>(null);
  const [telephone, setTelephone] = useState<string | null>(null);
  const [password, setPassword] = useState<string | null>(null);
  const router = useRouter();
  const addUser = async () => {
    if (!name || !email || !telephone || !password) {
      return;
    }
    try {
      const user: UserRegister = {
        name: name,
        userEmail: email,
        tel: telephone,
        userPassword: password,
      };
      const newUser = await userRegister(user);
      router.push('/api/auth/signin');
      router.refresh();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Register</h1>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="name"
                placeholder="John"
                className="input input-bordered"
                required
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="John@gmail.com"
                className="input input-bordered"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                required
                minLength={8}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Tel</span>
              </label>
              <input
                type="tel"
                placeholder="099-999-9999"
                className="input input-bordered"
                required
                onChange={(e) => setTelephone(e.target.value)}
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              />
            </div>
            <div className="form-control mt-6">
              <button
                className="btn btn-primary"
                type="submit"
                onClick={(e: React.FormEvent) => {
                  e.preventDefault();
                  addUser();
                }}
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
