import React, { useState, useEffect, useRef } from 'react';
import { BsSearch, BsX } from 'react-icons/bs';
import './floating-search.css';

const FloatingSearch = ({ onSearch }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const inputRef = useRef(null);
  const containerRef = useRef(null);

  // Handle click outside to close
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setIsExpanded(false);
        setSearchTerm('');
        if (onSearch) {
          onSearch('');
        }
      }
    };

    if (isExpanded) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isExpanded, onSearch]);

  // Focus input when expanded
  useEffect(() => {
    if (isExpanded && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isExpanded]);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
    if (isExpanded) {
      setSearchTerm('');
      if (onSearch) {
        onSearch('');
      }
    }
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    if (onSearch) {
      onSearch(value);
    }
  };

  const handleClear = () => {
    setSearchTerm('');
    if (onSearch) {
      onSearch('');
    }
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      if (onSearch) {
        onSearch(searchTerm);
      }
    }
    if (e.key === 'Escape') {
      setIsExpanded(false);
      setSearchTerm('');
      if (onSearch) {
        onSearch('');
      }
    }
  };

  return (
    <div className={`floating-search ${isExpanded ? 'expanded' : ''}`} ref={containerRef}>
      {!isExpanded ? (
        <button 
          className="search-icon-button"
          onClick={handleToggle}
          aria-label="Open search"
          title="Search portfolio"
        >
          <BsSearch />
        </button>
      ) : (
        <div className="search-input-container">
          <BsSearch className="search-icon" />
          <input
            ref={inputRef}
            type="text"
            value={searchTerm}
            onChange={handleInputChange}
            onKeyPress={handleKeyPress}
            placeholder="Search portfolio..."
            className="floating-search-input"
            autoComplete="off"
          />
          {searchTerm && (
            <button 
              onClick={handleClear}
              className="clear-button"
              aria-label="Clear search"
            >
              <BsX />
            </button>
          )}
          <button 
            onClick={handleToggle}
            className="close-button"
            aria-label="Close search"
          >
            <BsX />
          </button>
        </div>
      )}
    </div>
  );
};

export default FloatingSearch;
