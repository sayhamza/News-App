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
        window.location.href = '/';
      } catch (error) {
        // Handle sign-in errors and update the error state
        console.error('Error signing in:', error);
      }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full space-y-8 p-8 bg-white shadow-lg rounded-lg">
        <h2 className="text-center text-3xl font-semibold">Sign In</h2>
        <form onSubmit={handleSignIn} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              autoComplete="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              id="password"
              type="password"
              autoComplete="current-password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Sign In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignInPage;
