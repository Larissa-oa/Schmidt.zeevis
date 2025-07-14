import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ProductPage1.css'; 
import chips from '../assets/chips.png'
import chips1 from '../assets/chips1.png'
import chips2 from '../assets/chips2.jpg'
import chips3 from '../assets/chips3.jpeg'

const ProductPage2 = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedSnack, setSelectedSnack] = useState('sal-de-ibiza');
  const [expandedSections, setExpandedSections] = useState({
    ingredients: false,
    allergens: false,
    preparation: false,
    storage: false
  });

  // Mock product data for Sal de Ibiza chips
  const product = {
    name: "Sal de Ibiza Chips Truffel",
    price: 2.95,
    currency: "€",
    description: "Deze exclusieve chips van Sal de Ibiza zijn een ware delicatesse. Met hun unieke truffel smaak en de perfecte crunch bieden ze een premium snack ervaring. Deze chips zijn gemaakt van de beste aardappelen en gekruid met de fijnste truffel aroma's voor een onvergetelijke smaakbeleving.",
    ingredients: "Aardappelen, zonnebloemolie, truffel aroma, zout, natuurlijke smaakstoffen",
    allergens: "Kan sporen van gluten en melk bevatten",
    weight: "100g",
    preparation: "Kant-en-klaar product. Direct te consumeren.",
    storage: "Bewaar op een droge, koele plaats. Na opening in een afgesloten verpakking bewaren.",
    category: "Premium Snacks",
    availability: "Op voorraad",
    rating: 4.8,
    reviews: 156,
    images: [
      chips
    ]
  };

  // Available snacks for selection
  const availableSnacks = [
    {
      id: 'sal-de-ibiza',
      name: 'Sal de Ibiza Chips Truffel',
      price: 2.95,
      image: chips,
      description: 'Premium truffel chips met exclusieve smaak'
    },
    {
      id: 'sal-de-ibiza-sea-salt',
      name: 'Sal de Ibiza Chips Sea Salt',
      price: 2.95,
      image: chips2,
      description: 'Zeezout chips voor de pure smaakliefhebber'
    },
    {
      id: 'sea-crunchy-zeewiersnack-olive-oil',
      name: 'Sea Crunchy Zeewiersnack Olive Oil',
      price: 4.25,
      image: chips1,
      description: 'Zeewiersnack met exclusieve olive oil smaak'
    },
    {
      id: 'sea-crunchy-zeewiersnack-teriyaki',
      name: 'Sea Crunchy Zeewiersnack Teriyaki',
      price: 4.25,
      image: chips3,
      description: 'Zeewiersnack met exclusieve teriyaki smaak'
    }
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === product.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? product.images.length - 1 : prev - 1
    );
  };

  const goToImage = (index) => {
    setCurrentImageIndex(index);
  };

  const handleQuantityChange = (newQuantity) => {
    if (newQuantity >= 1 && newQuantity <= 10) {
      setQuantity(newQuantity);
    }
  };

  const handleSnackSelection = (snackId) => {
    setSelectedSnack(snackId);
    // In a real app, this would update the product data
    console.log(`Selected snack: ${snackId}`);
  };

  const addToCart = () => {
    console.log(`Added ${quantity} ${product.name} to cart`);
    alert(`${quantity}x ${product.name} toegevoegd aan winkelwagen!`);
  };

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const InfoSection = ({ title, content, icon, isExpanded, onToggle }) => (
    <div className="info-section">
      <button 
        className="info-section-header"
        onClick={onToggle}
        aria-expanded={isExpanded}
      >
        <div className="info-section-title">
          {icon}
          <span>{title}</span>
        </div>
        <svg 
          className={`expand-icon ${isExpanded ? 'expanded' : ''}`}
          width="20" 
          height="20" 
          viewBox="0 0 24 24" 
          fill="none"
        >
          <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
      <div className={`info-section-content ${isExpanded ? 'expanded' : ''}`}>
        <p>{content}</p>
      </div>
    </div>
  );

  return (
    <div className="product-page">
      <div className="container">
        {/* Breadcrumb */}
        <nav className="breadcrumb">
          <Link to="/" className="breadcrumb-link">Home</Link>
          <span className="breadcrumb-separator">/</span>
          <Link to="/webwinkel" className="breadcrumb-link">Webwinkel</Link>
          <span className="breadcrumb-separator">/</span>
          <Link to="/diversen" className="breadcrumb-link">Diversen</Link>
          <span className="breadcrumb-separator">/</span>
          <span className="breadcrumb-current">{product.name}</span>
        </nav>

        <div className="product-layout">
          {/* Product Images */}
          <div className="product-images">
            <div className="image-container">
              <img 
                src={product.images[currentImageIndex]} 
                alt={product.name}
                className="main-image"
                style={{ objectFit: 'contain', backgroundColor: '#f8f9fa' }}
              />
              
              {/* Image slider controls - only show if multiple images */}
              {product.images.length > 1 && (
                <>
                  <button 
                    className="slider-btn slider-btn-prev"
                    onClick={prevImage}
                    aria-label="Previous image"
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                  
                  <button 
                    className="slider-btn slider-btn-next"
                    onClick={nextImage}
                    aria-label="Next image"
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                  
                  {/* Image indicators */}
                  <div className="image-indicators">
                    {product.images.map((_, index) => (
                      <button
                        key={index}
                        className={`indicator ${index === currentImageIndex ? 'active' : ''}`}
                        onClick={() => goToImage(index)}
                        aria-label={`Go to image ${index + 1}`}
                      />
                    ))}
                  </div>
                </>
              )}

              {product.images.length > 1 && (
                <div className="thumbnail-gallery">
                  {product.images.map((image, index) => (
                    <button
                      key={index}
                      className={`thumbnail ${index === currentImageIndex ? 'active' : ''}`}
                      onClick={() => goToImage(index)}
                    >
                      <img src={image} alt={`${product.name} ${index + 1}`} />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Add to Cart Section - Moved here */}
            <div className="add-to-cart-section">
              <div className="quantity-selector">
                <label htmlFor="quantity">Aantal:</label>
                <div className="quantity-controls">
                  <button 
                    className="quantity-btn"
                    onClick={() => handleQuantityChange(quantity - 1)}
                    disabled={quantity <= 1}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                  <input
                    type="number"
                    id="quantity"
                    value={quantity}
                    onChange={(e) => handleQuantityChange(parseInt(e.target.value) || 1)}
                    min="1"
                    max="10"
                    className="quantity-input"
                  />
                  <button 
                    className="quantity-btn"
                    onClick={() => handleQuantityChange(quantity + 1)}
                    disabled={quantity >= 10}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path d="M12 5V19M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </div>
              </div>

              <div className="cart-actions">
                <button className="btn btn-accent add-to-cart-btn" onClick={addToCart}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="cart-icon">
                    <path d="M9 22C9.55228 22 10 21.5523 10 21C10 20.4477 9.55228 20 9 20C8.44772 20 8 20.4477 8 21C8 21.5523 8.44772 22 9 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M20 22C20.5523 22 21 21.5523 21 21C21 20.4477 20.5523 20 20 20C19.4477 20 19 20.4477 19 21C19 21.5523 19.4477 22 20 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M1 1H5L7.68 14.39C7.77144 14.8504 8.02191 15.264 8.38755 15.5583C8.75318 15.8526 9.2107 16.009 9.68 16H19.4C19.8693 16.009 20.3268 15.8526 20.6925 15.5583C21.0581 15.264 21.3086 14.8504 21.4 14.39L23 6H6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Toevoegen aan winkelwagen
                </button>
                
                <button className="btn btn-secondary wishlist-btn">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M20.84 4.61C20.3292 4.099 19.7228 3.69364 19.0554 3.41708C18.3879 3.14052 17.6725 2.99817 16.95 2.99817C16.2275 2.99817 15.5121 3.14052 14.8446 3.41708C14.1772 3.69364 13.5708 4.099 13.06 4.61L12 5.67L10.94 4.61C9.9083 3.5783 8.50903 2.9987 7.05 2.9987C5.59096 2.9987 4.19169 3.5783 3.16 4.61C2.1283 5.6417 1.5487 7.04097 1.5487 8.5C1.5487 9.95903 2.1283 11.3583 3.16 12.39L12 21.23L20.84 12.39C21.351 11.8792 21.7564 11.2728 22.0329 10.6054C22.3095 9.93789 22.4518 9.22249 22.4518 8.5C22.4518 7.77751 22.3095 7.0621 22.0329 6.39464C21.7564 5.72718 21.351 5.12075 20.84 4.61Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Favorieten
                </button>
              </div>

              <div className="total-price">
                <span className="total-label">Totaal:</span>
                <span className="total-amount">{product.currency}{(product.price * quantity).toFixed(2)}</span>
              </div>
            </div>
          </div>

          {/* Product Info */}
          <div className="product-info">
            <div className="product-header">
              <h1 className="product-title">{product.name}</h1>
              <div className="product-rating">
                <div className="stars">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} width="20" height="20" viewBox="0 0 24 24" fill={i < Math.floor(product.rating) ? "#FFD700" : "#E5E7EB"}>
                      <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
                    </svg>
                  ))}
                </div>
                <span className="rating-text">{product.rating} ({product.reviews} reviews)</span>
              </div>
            </div>

            <div className="product-price">
              <span className="current-price">{product.currency}{product.price.toFixed(2)}</span>
              <span className="price-label">per stuk</span>
            </div>

            <div className="product-details">
              <div className="detail-item">
                <span className="detail-label">Gewicht:</span>
                <span className="detail-value">{product.weight}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Categorie:</span>
                <span className="detail-value">{product.category}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Voorraad:</span>
                <span className="detail-value available">{product.availability}</span>
              </div>
            </div>

            {/* Snack Selection */}
            <div className="snack-selection">
              <h3>Kies je smaak</h3>
              <div className="snack-options">
                {availableSnacks.map((snack) => (
                  <button
                    key={snack.id}
                    className={`snack-option ${selectedSnack === snack.id ? 'selected' : ''}`}
                    onClick={() => handleSnackSelection(snack.id)}
                  >
                    <div className="snack-image">
                      <img src={snack.image} alt={snack.name} />
                    </div>
                    <div className="snack-info">
                      <h4 className="snack-name">{snack.name}</h4>
                      <p className="snack-description">{snack.description}</p>
                      <span className="snack-price">{product.currency}{snack.price.toFixed(2)}</span>
                    </div>
                    <div className="snack-check">
                      {selectedSnack === snack.id && (
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                          <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      )}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <div className="product-description">
              <h3>Beschrijving</h3>
              <p>{product.description}</p>
            </div>

            {/* Modern Collapsible Information Sections */}
            <div className="product-info-sections">
              <InfoSection
                title="Ingrediënten"
                content={product.ingredients}
                icon={
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                }
                isExpanded={expandedSections.ingredients}
                onToggle={() => toggleSection('ingredients')}
              />

              <InfoSection
                title="Allergenen"
                content={product.allergens}
                icon={
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 8V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 16H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                }
                isExpanded={expandedSections.allergens}
                onToggle={() => toggleSection('allergens')}
              />

              <InfoSection
                title="Bereiding"
                content={product.preparation}
                icon={
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                }
                isExpanded={expandedSections.preparation}
                onToggle={() => toggleSection('preparation')}
              />

              <InfoSection
                title="Bewaring"
                content={product.storage}
                icon={
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M3 7V5C3 4.44772 3.44772 4 4 4H20C20.5523 4 21 4.44772 21 5V7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M3 7V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8 2V6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M16 2V6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                }
                isExpanded={expandedSections.storage}
                onToggle={() => toggleSection('storage')}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage2;
