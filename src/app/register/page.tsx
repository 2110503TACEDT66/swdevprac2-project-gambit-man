'use client';
import { UserRegister } from '@/interfaces';
import userRegister from '@/src/libs/userRegister';
import { redirect } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Suspense } from 'react';
import { LinearProgress } from "@mui/material";
export default function Register() {
  const [name, setName] = useState<string | null>(null);
  const [email, setEmail] = useState<string | null>(null);
  const [telephone, setTelephone] = useState<string | null>(null);
  const [password, setPassword] = useState<string | null>(null);
  const router = useRouter();
  const [nameValid, setNameValid] = useState(false);
  const [emailValid, setEmailValid] = useState(false);
  const [passwordValid, setPasswordValid] = useState(false);
  const [telephoneValid, setTelephoneValid] = useState(false);
  const addUser = async () => {
    if (!name || !email || !telephone || !password) {
      return;
    }
    if (!nameValid || !emailValid || !passwordValid || !telephoneValid) {
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

      router.replace('/api/auth/signin');
      router.refresh();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (!name || !/^[a-zA-Z]*$/.test(name)) {
      setNameValid(false);
    } else {
      setNameValid(true);
    }

    if (
      !email ||
      !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
    ) {
      setEmailValid(false);
    } else {
      setEmailValid(true);
    }

    if (!password || password?.length < 8) {
      setPasswordValid(false);
    } else {
      setPasswordValid(true);
    }

    if (!telephone || !/^0\d{2}-\d{3}-\d{4}$/.test(telephone)) {
      setTelephoneValid(false);
    } else {
      setTelephoneValid(true);
    }
  }, [name, email, password, telephone]);

  return (
    <Suspense fallback={<p>Loading ... <LinearProgress/></p>}>
            <div className="hero min-h-screen bg-base-200 gap-y-3 mt-10">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold m-10">Register</h1>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form className="card-body gap-y-4">
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
            {nameValid ? (
              <div role="alert" className="alert alert-success">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="stroke-current shrink-0 h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>Your name is valid</span>
              </div>
            ) : (
              <div role="alert" className="alert alert-error">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="stroke-current shrink-0 h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>
                  Your name is invalid <br />
                  Name contains only letters
                </span>
              </div>
            )}
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
            {emailValid ? (
              <div role="alert" className="alert alert-success">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="stroke-current shrink-0 h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>Your Email is valid</span>
              </div>
            ) : (
              <div role="alert" className="alert alert-error">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="stroke-current shrink-0 h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>Your Email is invalid</span>
              </div>
            )}
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
            {passwordValid ? (
              <div role="alert" className="alert alert-success">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="stroke-current shrink-0 h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>Your Password is valid</span>
              </div>
            ) : (
              <div role="alert" className="alert alert-error">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="stroke-current shrink-0 h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>
                  Your Password is invalid <br />
                  Password must be at least 8 characters
                </span>
              </div>
            )}
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
            {telephoneValid ? (
              <div role="alert" className="alert alert-success">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="stroke-current shrink-0 h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>Your Tel is valid</span>
              </div>
            ) : (
              <div role="alert" className="alert alert-error">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="stroke-current shrink-0 h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>
                  Your Tel is invalid <br />
                  Tel format must be 0xx-xxx-xxxx
                </span>
              </div>
            )}
            <div className="form-control mt-6">
              <button
                className="btn btn-primary"
                type="submit"
                onClick={(e) => {
                  e.preventDefault();
                  addUser();
                }}
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    </Suspense>
    
  );
}
