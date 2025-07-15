import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logoImage from '../assets/logo.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentBannerIndex, setCurrentBannerIndex] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');

  // Rotating banner messages with icons
  const bannerMessages = [
    {
      text: "Elke dag meer dan 133 soorten verse vis",
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
          <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M3 21H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      text: "Voor 12:00 besteld = morgen bezorgd",
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
          <polyline points="12,6 12,12 16,14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      text: "Ruimste assortiment van Nederland",
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
          <path d="M3 3H21V21H3V3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M3 9H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M9 21V9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      text: "Gekoeld thuisbezorgd door heel Nederland",
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
          <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2"/>
        </svg>
      )
    }
  ];

  // Rotate banner messages with smoother timing
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBannerIndex((prev) => (prev + 1) % bannerMessages.length);
    }, 4000); // Increased to 4 seconds for better readability
    return () => clearInterval(interval);
  }, [bannerMessages.length]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
    // Add search functionality here
  };

  return (
    <>
      {/* Rotating Banner */}
      <div className="rotating-banner">
        <div className="banner-container">
          <div className="banner-message">
            {bannerMessages.map((message, index) => (
              <div
                key={index}
                className={`banner-item ${index === currentBannerIndex ? 'active' : ''}`}
              >
                <div className="banner-content">
                  <span className="banner-icon">
                    {message.icon}
                  </span>
                  <span className="banner-text">
                    {message.text}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="navbar">
        <div className="container">
          <div className="navbar-content">
            {/* Logo */}
            <div className="navbar-brand">
              <Link to="/" className="logo">
                <img 
                  src={logoImage}
                  alt="Schmidt Zeevis" 
                  className="logo-image"
                />
              </Link>
            </div>

            {/* Search Bar */}
            <div className="search-container">
              <form onSubmit={handleSearch} className="search-form">
                <div className="search-input-wrapper">
                  <input
                    type="text"
                    placeholder="Zoek naar vis, garnalen, oesters..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="search-input"
                  />
                  <button type="submit" className="search-btn">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path d="M5 12H19M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </div>
              </form>
            </div>

            {/* Desktop Navigation */}
            <div className="navbar-nav desktop-nav">
              <Link to="/" className="nav-link">Webwinkel</Link>
              <Link to="/on-s-verhaal" className="nav-link">Ons verhaal</Link>
              <Link to="/de-winkel" className="nav-link">De winkel</Link>
              <Link to="/contact" className="nav-link">Contact</Link>
            </div>

            {/* User Actions */}
            <div className="navbar-actions">
              <button className="action-btn wishlist-btn" aria-label="Favorieten">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M20.84 4.61C20.3292 4.099 19.7228 3.69364 19.0554 3.41708C18.3879 3.14052 17.6725 2.99817 16.95 2.99817C16.2275 2.99817 15.5121 3.14052 14.8446 3.41708C14.1772 3.69364 13.5708 4.099 13.06 4.61L12 5.67L10.94 4.61C9.9083 3.5783 8.50903 2.9987 7.05 2.9987C5.59096 2.9987 4.19169 3.5783 3.16 4.61C2.1283 5.6417 1.5487 7.04097 1.5487 8.5C1.5487 9.95903 2.1283 11.3583 3.16 12.39L12 21.23L20.84 12.39C21.351 11.8792 21.7564 11.2728 22.0329 10.6054C22.3095 9.93789 22.4518 9.22249 22.4518 8.5C22.4518 7.77751 22.3095 7.0621 22.0329 6.39464C21.7564 5.72718 21.351 5.12075 20.84 4.61Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              
              <button className="action-btn cart-btn" aria-label="Winkelwagen">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M9 22C9.55228 22 10 21.5523 10 21C10 20.4477 9.55228 20 9 20C8.44772 20 8 20.4477 8 21C8 21.5523 8.44772 22 9 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M20 22C20.5523 22 21 21.5523 21 21C21 20.4477 20.5523 20 20 20C19.4477 20 19 20.4477 19 21C19 21.5523 19.4477 22 20 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M1 1H5L7.68 14.39C7.77144 14.8504 8.02191 15.264 8.38755 15.5583C8.75318 15.8526 9.2107 16.009 9.68 16H19.4C19.8693 16.009 20.3268 15.8526 20.6925 15.5583C21.0581 15.264 21.3086 14.8504 21.4 14.39L23 6H6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="cart-count">0</span>
              </button>
              
              <button className="action-btn account-btn" aria-label="Account">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>

              {/* Hamburger Menu Button */}
              <button 
                className={`hamburger-btn ${isMenuOpen ? 'active' : ''}`}
                onClick={toggleMenu}
                aria-label="Menu"
              >
                <span className="hamburger-line"></span>
                <span className="hamburger-line"></span>
                <span className="hamburger-line"></span>
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className={`mobile-nav ${isMenuOpen ? 'active' : ''}`}>
            <div className="mobile-nav-content">
              <div className="mobile-nav-header">
                <h3 className="mobile-nav-title">Menu</h3>
                <button 
                  className="mobile-close-btn"
                  onClick={toggleMenu}
                  aria-label="Close menu"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
              
              <div className="mobile-nav-links">
                <Link to="/" className="mobile-nav-link" onClick={toggleMenu}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M9 22V12H15V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Webwinkel
                </Link>
                <Link to="/on-s-verhaal" className="mobile-nav-link" onClick={toggleMenu}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Ons verhaal
                </Link>
                <Link to="/de-winkel" className="mobile-nav-link" onClick={toggleMenu}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M3 9H21V21H3V9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M3 3H21V9H3V3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M9 15H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  De winkel
                </Link>
                <Link to="/contact" className="mobile-nav-link" onClick={toggleMenu}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <polyline points="22,6 12,13 2,6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Contact
                </Link>
              </div>
              
              <div className="mobile-nav-footer">
                <div className="mobile-nav-actions">
                  <button className="mobile-action-btn">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                      <path d="M20.84 4.61C20.3292 4.099 19.7228 3.69364 19.0554 3.41708C18.3879 3.14052 17.6725 2.99817 16.95 2.99817C16.2275 2.99817 15.5121 3.14052 14.8446 3.41708C14.1772 3.69364 13.5708 4.099 13.06 4.61L12 5.67L10.94 4.61C9.9083 3.5783 8.50903 2.9987 7.05 2.9987C5.59096 2.9987 4.19169 3.5783 3.16 4.61C2.1283 5.6417 1.5487 7.04097 1.5487 8.5C1.5487 9.95903 2.1283 11.3583 3.16 12.39L12 21.23L20.84 12.39C21.351 11.8792 21.7564 11.2728 22.0329 10.6054C22.3095 9.93789 22.4518 9.22249 22.4518 8.5C22.4518 7.77751 22.3095 7.0621 22.0329 6.39464C21.7564 5.72718 21.351 5.12075 20.84 4.61Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Favorieten
                  </button>
                  <button className="mobile-action-btn">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                      <path d="M9 22C9.55228 22 10 21.5523 10 21C10 20.4477 9.55228 20 9 20C8.44772 20 8 20.4477 8 21C8 21.5523 8.44772 22 9 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M20 22C20.5523 22 21 21.5523 21 21C21 20.4477 20.5523 20 20 20C19.4477 20 19 20.4477 19 21C19 21.5523 19.4477 22 20 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M1 1H5L7.68 14.39C7.77144 14.8504 8.02191 15.264 8.38755 15.5583C8.75318 15.8526 9.2107 16.009 9.68 16H19.4C19.8693 16.009 20.3268 15.8526 20.6925 15.5583C21.0581 15.264 21.3086 14.8504 21.4 14.39L23 6H6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Winkelwagen (0)
                  </button>
                  <button className="mobile-action-btn">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                      <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Account
                  </button>
                </div>
              </div>
            </div>
            <div className="mobile-nav-overlay" onClick={toggleMenu}></div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
