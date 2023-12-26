'use client'

import { useState, useEffect } from 'react';

export default function Home() {
  const [articles, setArticles] = useState([]);

  // Your existing useEffect for fetching articles
  useEffect(() => {
    // Your fetch logic to get articles from an API
    // Update state using setArticles with fetched articles
    // Example:
    const fetchArticles = async () => {
      try {
        const response = await fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=179b37ae32bc4aba8688fe67454a5cc9');
        const data = await response.json();
        // Fetching only 6 articles
        setArticles(data.articles.slice(0, 6));
      } catch (error) {
        console.error('Error fetching articles:', error);
      }
    };

    fetchArticles();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <nav className="bg-blue-500 p-4">
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
          <span className="text-white font-bold text-2xl font-style: italic font-serif">News App</span>
          <div className="flex space-x-4">
            <button className="text-white px-4 py-2 rounded-lg">Register</button>
            <button className="text-white px-4 py-2 rounded-lg">Login</button>
          </div>
        </div>
      </nav>

      {/* Main content */}
      <main className="container mx-auto py-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-8">Welcome to News Application</h1>
          <p className="text-lg leading-relaxed mb-8">
            Our News App provides the latest updates from around the world. Stay informed with
            breaking news, top headlines, and in-depth articles covering various topics of interest.
            Explore and discover the most relevant news for you.

            Register and Login to Read More.
          </p>
        </div>

        {/* Article grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-semibold mb-4">{article.title}</h3>
              <p className="text-base text-gray-700 mb-4">{article.description}</p>
              {/* Article content */}
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
