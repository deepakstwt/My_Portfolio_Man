import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import './search-section.css';

const SearchSection = ({ globalSearchTerm }) => {
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  // Enhanced searchable data with more content
  const searchableContent = [
    // Skills
    { id: 1, type: 'skill', title: 'React.js', category: 'Frontend', keywords: ['react', 'javascript', 'frontend', 'web', 'ui'] },
    { id: 2, type: 'skill', title: 'Node.js', category: 'Backend', keywords: ['node', 'javascript', 'backend', 'server', 'api'] },
    { id: 3, type: 'skill', title: 'iOS Development', category: 'Mobile', keywords: ['ios', 'swift', 'mobile', 'app', 'iphone'] },
    { id: 4, type: 'skill', title: 'JavaScript', category: 'Programming', keywords: ['javascript', 'js', 'programming', 'web', 'frontend'] },
    { id: 5, type: 'skill', title: 'Python', category: 'Programming', keywords: ['python', 'programming', 'backend', 'data', 'ml'] },
    { id: 6, type: 'skill', title: 'HTML/CSS', category: 'Frontend', keywords: ['html', 'css', 'web', 'frontend', 'styling'] },
    { id: 7, type: 'skill', title: 'MongoDB', category: 'Database', keywords: ['mongodb', 'database', 'nosql', 'backend'] },
    { id: 8, type: 'skill', title: 'Express.js', category: 'Backend', keywords: ['express', 'node', 'backend', 'api', 'server'] },
    
    // Projects
    { id: 9, type: 'project', title: 'Portfolio Website', category: 'Web Development', keywords: ['portfolio', 'website', 'react', 'web', 'personal'] },
    { id: 10, type: 'project', title: 'E-commerce App', category: 'Full Stack', keywords: ['ecommerce', 'shopping', 'app', 'fullstack', 'web'] },
    { id: 11, type: 'project', title: 'Mobile Game', category: 'iOS Development', keywords: ['game', 'mobile', 'ios', 'swift', 'entertainment'] },
    { id: 12, type: 'project', title: 'Task Manager', category: 'Web App', keywords: ['task', 'manager', 'productivity', 'web', 'app'] },
    
    // Experience
    { id: 13, type: 'experience', title: 'Infosys', category: 'Work Experience', keywords: ['infosys', 'work', 'job', 'experience', 'company'] },
    { id: 14, type: 'experience', title: 'Motion Cut', category: 'Internship', keywords: ['motion', 'cut', 'internship', 'experience', 'training'] },
    { id: 15, type: 'experience', title: 'Frontend Developer', category: 'Role', keywords: ['frontend', 'developer', 'web', 'ui', 'react'] },
    { id: 16, type: 'experience', title: 'Full Stack Developer', category: 'Role', keywords: ['fullstack', 'developer', 'web', 'backend', 'frontend'] },
  ];

  const handleSearch = (searchTerm) => {
    console.log('Search term received:', searchTerm); // Debug log
    
    if (!searchTerm || !searchTerm.trim()) {
      setSearchResults([]);
      setIsSearching(false);
      return;
    }

    setIsSearching(true);
    
    // Convert search term to lowercase for case-insensitive search
    const normalizedSearchTerm = searchTerm.toLowerCase().trim();
    
    // Enhanced filter logic with multiple search criteria
    const filtered = searchableContent.filter(item => {
      const titleMatch = item.title.toLowerCase().includes(normalizedSearchTerm);
      const categoryMatch = item.category.toLowerCase().includes(normalizedSearchTerm);
      const typeMatch = item.type.toLowerCase().includes(normalizedSearchTerm);
      const keywordMatch = item.keywords && item.keywords.some(keyword => 
        keyword.toLowerCase().includes(normalizedSearchTerm)
      );
      
      return titleMatch || categoryMatch || typeMatch || keywordMatch;
    });

    console.log('Filtered results:', filtered); // Debug log
    setSearchResults(filtered);
  };

  const scrollToSection = (type) => {
    const sectionMap = {
      'skill': 'experience',
      'project': 'portfolio',
      'experience': 'experience'
    };
    
    const sectionId = sectionMap[type] || type;
    const element = document.getElementById(sectionId);
    
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  // Effect to handle global search term from floating search
  useEffect(() => {
    if (globalSearchTerm) {
      handleSearch(globalSearchTerm);
    }
  }, [globalSearchTerm]);

  return (
    <section id="search" className="search-section">
      <div className="container search__container">
        <h5 className="section-subtitle">FIND WHAT YOU'RE LOOKING FOR</h5>
        <h2 className="section-title">Search Portfolio</h2>
        
        <SearchBar 
          onSearch={handleSearch}
          placeholder="Search projects, skills, experience..."
        />

        {isSearching && searchResults.length > 0 && (
          <div className="search-results">
            <h3 className="results-title">Search Results ({searchResults.length})</h3>
            <div className="results-grid">
              {searchResults.map(item => (
                <div 
                  key={item.id} 
                  className={`result-card ${item.type}`}
                  onClick={() => scrollToSection(item.type)}
                >
                  <div className="result-type">{item.type}</div>
                  <h4 className="result-title">{item.title}</h4>
                  <p className="result-category">{item.category}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {isSearching && searchResults.length === 0 && (
          <div className="no-results">
            <h3>No results found</h3>
            <p>Try searching for skills, projects, or experience</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default SearchSection;