'use client'
import { useState, useEffect } from 'react';

export default function Home() {
  const [articles, setArticles] = useState([]);
  const [isGridView, setIsGridView] = useState(true);
  const [activeArticle, setActiveArticle] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        // Replace 'YOUR_API_KEY' with your actual News API key
        const apiKey = '179b37ae32bc4aba8688fe67454a5cc9';
        const response = await fetch(
          `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`
        );
        const data = await response.json();

        // Update state with fetched articles
        setArticles(data.articles);
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };

    fetchNews();
  }, []);

  const handleProfileClick = () => {
    // Implement profile click action here (e.g., redirect to profile page)
    console.log('Profile clicked');
  };

  const handleLogoutClick = () => {
    // Implement logout click action here (e.g., perform logout functionality)
    console.log('Logout clicked');
  };

  const handleArticleClick = (index) => {
    setActiveArticle(index === activeArticle ? null : index);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <nav className="bg-blue-500 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <span className="text-white font-bold text-xl">News App</span>
          <div className="flex space-x-4">
            <button
              className={`text-white px-3 py-1 rounded ${
                isGridView ? 'bg-white text-blue-500' : ''
              }`}
              onClick={() => setIsGridView(true)}
            >
              Grid View
            </button>
            <button
              className={`text-white px-3 py-1 rounded ${
                !isGridView ? 'bg-white text-blue-500' : ''
              }`}
              onClick={() => setIsGridView(false)}
            >
              List View
            </button>
            <button className="text-white px-3 py-1 rounded" onClick={handleProfileClick}>
              Profile
            </button>
            <button className="text-white px-3 py-1 rounded" onClick={handleLogoutClick}>
              Logout
            </button>
          </div>
        </div>
      </nav>

      {/* Main content */}
      <main className="container mx-auto py-8">
        <div className={`grid ${isGridView ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8' : ''}`}>
          {articles.length > 0 ? (
            articles.slice(0, 9).map((article, index) => (
              <div key={index} className={`relative ${!isGridView && 'mb-4'}`}>
                <div
                  className={`bg-white rounded-lg p-4 cursor-pointer relative hover:shadow-md transition duration-300 ${
                    isGridView ? 'h-full' : 'h-auto'
                  }`}
                  onClick={() => handleArticleClick(index)}
                >
                  <div className="flex flex-col h-full">
                    <h3 className="text-lg font-semibold mb-2">{article.title}</h3>
                    <p className="text-sm text-gray-600">{article.description}</p>
                    {/* Read More button */}
                    {activeArticle === index && (
                      <div className="mt-2">
                        <button
                          className="text-white bg-blue-500 hover:bg-blue-600 px-3 py-1 rounded"
                          onClick={() => window.open(article.url, '_blank')}
                        >
                          Read More
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>Loading Articles...</p>
          )}
        </div>
      </main>
    </div>
  );
}
