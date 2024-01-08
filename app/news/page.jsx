'use client'
import { useState, useEffect } from 'react';

export default function Home() {
  const [articles, setArticles] = useState([]);
  const [isGridView, setIsGridView] = useState(true);
  const [activeArticle, setActiveArticle] = useState(null);
  const [showDropdown, setShowDropdown] = useState(false);

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
    window.location.href = '/';
  };

  const handleArticleClick = (index) => {
    setActiveArticle(index === activeArticle ? null : index);
  };

  const toggleViewMode = () => {
    setIsGridView(!isGridView);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <nav className="bg-blue-500 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <span className="text-white font-bold text-2xl font-style: italic font-serif">News Feed</span>
          <div className="flex space-x-4 items-center">
            <button
              className="text-blue-500 border border-white px-4 py-2 rounded-full focus:outline-none text-white"
              onClick={toggleViewMode}
            >
              {isGridView ? 'List View' : 'Grid View'}
            </button>
            <div className="relative">
              <div
                onClick={() => setShowDropdown(!showDropdown)}
                className="flex items-center cursor-pointer"
              >
                <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white">
                  <img
                    src="https://images.unsplash.com/photo-1581382575275-97901c2635b7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWFufGVufDB8fDB8fHww"
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              {showDropdown && (
                <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                  <ul className="py-2">
                    <li
                      onClick={handleProfileClick}
                      className="cursor-pointer hover:bg-gray-100 px-4 py-2"
                    >
                      Profile
                    </li>
                    <li
                      onClick={handleLogoutClick}
                      className="cursor-pointer hover:bg-gray-100 px-4 py-2 text-red-600"
                    >
                      Logout
                    </li>
                  </ul>
                </div>
              )}
            </div>
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
                          className="text-white bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-full"
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
