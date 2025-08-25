import React, { useState, useEffect } from 'react';
import { BsSearch, BsX } from 'react-icons/bs';
import './search-bar.css';

const SearchBar = ({ onSearch, placeholder = "Search projects, skills, or content...", value, compact = false }) => {
  const [searchTerm, setSearchTerm] = useState(value || '');
  const [isExpanded, setIsExpanded] = useState(false);

  // Update local state when value prop changes
  useEffect(() => {
    if (value !== undefined) {
      setSearchTerm(value);
    }
  }, [value]);

  const handleInputChange = (e) => {
    const value = e.target.value;
    console.log('Input value changed:', value); // Debug log
    setSearchTerm(value);
    
    // Call onSearch with the actual value (not converted to lowercase here)
    // The SearchSection will handle case conversion
    if (onSearch) {
      onSearch(value);
    }
  };

  const handleClear = () => {
    console.log('Clearing search'); // Debug log
    setSearchTerm('');
    if (onSearch) {
      onSearch('');
    }
    setIsExpanded(false);
  };

  const handleFocus = () => {
    setIsExpanded(true);
  };

  const handleBlur = () => {
    // Delay the blur to allow clicking on results
    setTimeout(() => {
      if (!searchTerm) {
        setIsExpanded(false);
      }
    }, 200);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      // Trigger search on Enter key
      if (onSearch) {
        onSearch(searchTerm);
      }
    }
  };

  return (
    <div className={`search-container ${isExpanded ? 'expanded' : ''} ${compact ? 'compact' : ''}`}>
      <div className="search-bar">
        <BsSearch className="search-icon" />
        <input
          type="text"
          value={searchTerm}
          onChange={handleInputChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onKeyPress={handleKeyPress}
          placeholder={placeholder}
          className="search-input"
          autoComplete="off"
        />
        {searchTerm && (
          <button 
            onClick={handleClear}
            className="clear-button"
            aria-label="Clear search"
            type="button"
          >
            <BsX />
          </button>
        )}
      </div>
      {searchTerm && !compact && (
        <div className="search-results-indicator">
          Searching for: <span className="search-term">{searchTerm}</span>
        </div>
      )}
    </div>
  );
};

export default SearchBar; 