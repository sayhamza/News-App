import { useState, useEffect } from 'react';

export default function Home() {
  // Your existing state and useEffect for fetching articles

  return (


    
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <nav className="bg-blue-500 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <span className="text-white font-bold text-xl">News App</span>
          <div className="flex space-x-4">
            <button className="text-white px-3 py-1 rounded" >Register</button>
            <button className="text-white px-3 py-1 rounded">Login</button>
          </div>
        </div>
      </nav>

      {/* Main content */}
      <main className="container mx-auto py-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Welcome to our News App</h1>
          <p className="text-lg">
            Our News App provides the latest news updates from around the world. Stay informed
            with breaking news, top headlines, and more.
          </p>
        </div>

        {/*  article grid/list display */}

      </main>
    </div>
  );
}
