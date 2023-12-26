'use client'

import { useState } from 'react';
import {auth} from "@/app/firebase/config"
import {useSignInWithEmailAndPassword} from 'react-firebase-hooks/auth'


const SignInPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userSignIn] = useSignInWithEmailAndPassword(auth)


  const handleSignIn = async (e) => {
    e.preventDefault();

    try {
        // Sign in the user with email and password using Firebase Auth
         await userSignIn(email, password);
  
        // If sign-in is successful, clear the form and error state
        setEmail('');
        setPassword('');
  
        console.log('User signed in successfully');
        // You can redirect the user to another page upon successful sign-in
        // Example: history.push('/dashboard');
        window.location.href = '/news';
      } catch (error) {
        // Handle sign-in errors and update the error state
        console.error('Error signing in:', error);
      }
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Login Here
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={handleSignIn} action="/news">

              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@company.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="••••••••"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Login
              </button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Create an account? <a href="/register" className="font-medium text-blue-600 hover:underline dark:text-primary-500">Register</a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignInPage;
