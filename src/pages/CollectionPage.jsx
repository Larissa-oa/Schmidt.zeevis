import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './CollectionPage.css'
import fishbanner2 from '../assets/fishbanner2.png'
import zalm from '../assets/Zalm.png'
import caviar from '../assets/Caviar.png'
import oesters from '../assets/Oesters.png'
import makreelfillet from '../assets/Makreelfilet.png'
import sushibox from '../assets/Sushibox.png'
import oceanParadise from '../assets/Oceanparadise.png'
import macncheese from '../assets/macncheese2.png'
import lobster from '../assets/lobster-main.png'
import chips from '../assets/chips.png'

const CollectionPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [sortBy, setSortBy] = useState('name')
  const [searchQuery, setSearchQuery] = useState('')
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const navigate = useNavigate()

  // Navigation function for product cards
  const handleProductClick = (productName) => {
    switch (productName.toLowerCase()) {
      case 'lobster mac & cheese':
        navigate('/product/mac-n-cheese')
        break
      case 'white truffel chips':
        navigate('/product/chips')
        break
      case 'kreeft':
        navigate('/product/kreeft')
        break
      default:
        console.log(`Product ${productName} clicked - no route defined`)
    }
  }

  // Professional seafood products from Schmidt Zeevis
  const products = [
    {
      id: 1,
      name: "Zalm",
      category: "zalm",
      price: "€7.95",
      image: zalm,
      description: "Verse Noorse zalm filet, perfect voor grillen of bakken. Duurzaam gekweekt en MSC gecertificeerd.",
      weight: "300g",
      availability: "In stock",
      origin: "Noorwegen",
      sustainability: "ASC Gecertificeerd",
      prepTime: "15 min",
      catchMethod: "Kweek",
      season: "Jaarrond",
      rating: 4.9,
      reviews: 156,
      isPopular: true
    },
    {
      id: 2,
      name: "Kaviaar",
      category: "luxe",
      price: "€89.95",
      image: caviar,
      description: "Exclusieve kaviaar van de beste kwaliteit. Perfect voor speciale gelegenheden en luxe diners.",
      weight: "30g",
      availability: "In stock",
      origin: "Rusland",
      sustainability: "Duurzaam geoogst",
      prepTime: "Direct eetbaar",
      catchMethod: "Wild gevangen",
      season: "Jaarrond",
      rating: 4.8,
      reviews: 67,
      isNew: true
    },
    {
      id: 3,
      name: "Oesters",
      category: "schelpdieren",
      price: "€18.95",
      image: oesters,
      description: "Verse Zeelandse oesters, direct van de kwekerij. Perfect voor een luxe aperitief.",
      weight: "12 stuks",
      availability: "In stock",
      origin: "Zeeland, Nederland",
      sustainability: "ASC Gecertificeerd",
      prepTime: "Direct eetbaar",
      catchMethod: "Kweek",
      season: "September-April",
      rating: 4.7,
      reviews: 203,
      isPopular: true
    },
    {
      id: 4,
      name: " Makreelfilet",
      category: "makreel",
      price: "€12.50",
      image: makreelfillet,
      description: "Traditioneel gerookte makreel filet. Rijk aan omega-3 vetzuren en perfect voor broodjes.",
      weight: "200g",
      availability: "In stock",
      origin: "Nederland",
      sustainability: "MSC Gecertificeerd",
      prepTime: "Direct eetbaar",
      catchMethod: "Wild gevangen",
      season: "Herfst-Winter",
      rating: 4.6,
      reviews: 134
    },
    {
      id: 5,
      name: "Sushi Box Deluxe",
      category: "sushi",
      price: "€32.95",
      image: sushibox,
      description: "Complete sushi box met verse vis, perfect voor 2 personen. Inclusief wasabi, gember en sojasaus.",
      weight: "500g",
      availability: "In stock",
      origin: "Nederland",
      sustainability: "Duurzaam",
      prepTime: "Direct eetbaar",
      catchMethod: "Gekweekt/Wild",
      season: "Jaarrond",
      rating: 4.9,
      reviews: 89,
      isPopular: true
    },
    {
      id: 6,
      name: "Ocean Paradise",
      category: "mix",
      price: "€45.95",
      image: oceanParadise,
      description: "Luxe zeevruchten mix met garnalen, mosselen en vis. Perfect voor pasta of paella.",
      weight: "750g",
      availability: "In stock",
      origin: "Nederland",
      sustainability: "MSC/ASC Gecertificeerd",
      prepTime: "20 min",
      catchMethod: "Wild gevangen/Kweek",
      season: "Jaarrond",
      rating: 4.8,
      reviews: 112,
      isNew: true
    },
    {
      id: 7,
      name: "Lobster Mac & Cheese",
      category: "bereid",
      price: "€15.95",
      image: macncheese,
      description: "Cremige mac & cheese met verse zalm. Kant-en-klaar maaltijd voor de hele familie.",
      weight: "400g",
      availability: "In stock",
      origin: "Nederland",
      sustainability: "ASC Gecertificeerd",
      prepTime: "8 min",
      catchMethod: "Kweek",
      season: "Jaarrond",
      rating: 4.7,
      reviews: 178,
      isPopular: true
    },
    {
      id: 8,
      name: "Kreeft",
      category: "kreeft",
      price: "€39.95",
      image: lobster,
      description: "Verse Noorse kreeft, perfect voor een luxe diner. Inclusief bereidingsinstructies.",
      weight: "500g",
      availability: "Limited stock",
      origin: "Noorwegen",
      sustainability: "MSC Gecertificeerd",
      prepTime: "25 min",
      catchMethod: "Wild gevangen",
      season: "Jaarrond",
      rating: 4.9,
      reviews: 95,
      isNew: true
    },
    {
      id: 9,
      name: "White Truffel Chips",
      category: "snacks",
      price: "€8.95",
      image: chips,
      description: "Knapperige vis chips in verschillende smaken. Perfect als snack of bij de borrel.",
      weight: "150g",
      availability: "In stock",
      origin: "Nederland",
      sustainability: "Duurzaam",
      prepTime: "Direct eetbaar",
      catchMethod: "Wild gevangen",
      season: "Jaarrond",
      rating: 4.5,
      reviews: 234
    }
  ]

  const categories = [
    { id: 'all', name: 'Alle Producten' },
    { id: 'zalm', name: 'Zalm' },
    { id: 'luxe', name: 'Luxe Producten' },
    { id: 'schelpdieren', name: 'Schelpdieren' },
    { id: 'makreel', name: 'Makreel' },
    { id: 'sushi', name: 'Sushi' },
    { id: 'mix', name: 'Zeevruchten Mix' },
    { id: 'bereid', name: 'Bereide Producten' },
    { id: 'kreeft', name: 'Kreeft' },
    { id: 'snacks', name: 'Snacks' }
  ]

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'name':
        return a.name.localeCompare(b.name)
      case 'price':
        return parseFloat(a.price.replace('€', '')) - parseFloat(b.price.replace('€', ''))
      case 'rating':
        return b.rating - a.rating
      default:
        return 0
    }
  })

  const renderStars = (rating) => {
    const stars = []
    const fullStars = Math.floor(rating)
    const hasHalfStar = rating % 1 !== 0
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(<span key={i} className="star filled">★</span>)
    }
    
    if (hasHalfStar) {
      stars.push(<span key="half" className="star half">★</span>)
    }
    
    const emptyStars = 5 - Math.ceil(rating)
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<span key={`empty-${i}`} className="star empty">☆</span>)
    }
    
    return stars
  }

  const otherCollections = [
    "Verse Vis",
    "Specials",
    "Schaal- en schelpdieren",
    "Delicatessen",
    "Kant-en-klaar",
    "Schotels",
    "Conserven",
    "Diepvries",
    "Sauze",
    "Diversen",
    "Sushi en sashimi",
    "Olie en azijn",
    "Kruiden en specerijen",
    "Merchandise"
  ]

  return (
    <div className="collection-page">
      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-background">
          <img src={fishbanner2} alt="Fresh fish" className="collection-hero-image" />
          <div className="hero-overlay"></div>
        </div>
        <div className="hero-content">
          <div className="hero-text">
            <h1>Alle Producten</h1>
            <div className="hero-info">
              <div className="info-item">
                <svg className="verified-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 12l2 2 4-4"></path>
                  <circle cx="12" cy="12" r="10"></circle>
                </svg>
                <span className="info-text">Ruimste assortiment van Nederland</span>
              </div>
              <div className="info-item">
                <svg className="verified-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 12l2 2 4-4"></path>
                  <circle cx="12" cy="12" r="10"></circle>
                </svg>
                <span className="info-text">Elke dag 133+ soorten verse vis</span>
              </div>
              <div className="info-item">
                <svg className="verified-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 12l2 2 4-4"></path>
                  <circle cx="12" cy="12" r="10"></circle>
                </svg>
                <span className="info-text">Voor 12:00 besteld - morgen bezorgd</span>
              </div>
            </div>
          </div>
          <div className="trustpilot-widget">
            <div className="trustpilot-rating">
              <div className="trustpilot-stars">
                <span className="star filled">★</span>
                <span className="star filled">★</span>
                <span className="star filled">★</span>
                <span className="star filled">★</span>
                <span className="star filled">★</span>
              </div>
              <div className="rating-details">
                <span className="rating-score">4.8</span>
                <span className="rating-max">/5</span>
              </div>
              <div className="rating-reviews">
                <span>uit 2,847 reviews</span>
              </div>
            </div>
            <div className="trustpilot-logo">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="#00B67A"/>
              </svg>
              <span>Trustpilot</span>
            </div>
          </div>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="search-filters-section">
        <div className="search-filters-container">
          <div className="search-bar">
            <input
              type="text"
              placeholder="Zoek naar vis, garnalen, oesters..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
            />
            <button className="search-btn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.35-4.35"></path>
              </svg>
            </button>
          </div>
          <div className="filters-row">
            <div className="filter-group">
              <label>Categorie</label>
              <select 
                value={selectedCategory} 
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="filter-select"
              >
                {categories.map(category => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="filter-group">
              <label>Sorteren</label>
              <select 
                value={sortBy} 
                onChange={(e) => setSortBy(e.target.value)}
                className="filter-select"
              >
                <option value="name">Naam</option>
                <option value="price">Prijs</option>
                <option value="rating">Beoordeling</option>
              </select>
            </div>
            <div className="results-count">
              <span>{sortedProducts.length} producten gevonden</span>
            </div>
          </div>
        </div>
      </div>

      {/* Sidebar and Products Grid Layout */}
      <div className="collection-layout">
        <div className="collection-sidebar">
          <button 
            className={`sidebar-toggle ${isSidebarOpen ? 'active' : ''}`}
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            <span>Andere categorieën</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="6,9 12,15 18,9"></polyline>
            </svg>
          </button>
          <div className={`sidebar-content ${isSidebarOpen ? 'active' : ''}`}>
            <div className="sidebar-title">Andere categorieën</div>
            <ul>
              {otherCollections.map((col) => (
                <li key={col} className="sidebar-collection-item">
                  {col}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div style={{ flex: 1 }}>
          {/* Products Grid */}
          <div className="products-container">
            <div className="products-grid">
              {sortedProducts.map(product => (
                <div 
                  key={product.id} 
                  className={`collection-card ${['Lobster Mac & Cheese', 'White Truffel Chips', 'Kreeft'].includes(product.name) ? 'clickable' : ''}`}
                  onClick={() => ['Lobster Mac & Cheese', 'White Truffel Chips', 'Kreeft'].includes(product.name) ? handleProductClick(product.name) : null}
                  style={{ cursor: ['Lobster Mac & Cheese', 'White Truffel Chips', 'Kreeft'].includes(product.name) ? 'pointer' : 'default' }}
                >
                  {/* Product Image */}
                  <div className="collection-card-image-container">
                    <img src={product.image} alt={product.name} className="collection-card-image" />
                    {/* Minimalist Badges */}
                    <div className="collection-card-badges">
                      {product.isNew && <span className="collection-card-badge collection-card-badge-new">Nieuw</span>}
                      {product.isPopular && <span className="collection-card-badge collection-card-badge-popular">Populair</span>}
                    </div>
                    {/* Quick Actions */}
                    <div className="collection-card-quick-actions">
                      <button 
                        className="collection-card-action-btn wishlist"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                        </svg>
                      </button>
                      <button 
                        className="collection-card-action-btn quick-view"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                          <circle cx="12" cy="12" r="3"></circle>
                        </svg>
                      </button>
                    </div>
                  </div>
                  {/* Product Info */}
                  <div className="collection-card-info">
                    <div className="collection-card-header">
                      <h3 className="collection-card-name">{product.name}</h3>
                    </div>
                    <div className="collection-card-rating">
                      <div className="collection-card-stars">
                        {renderStars(product.rating)}
                      </div>
                      <span className="collection-card-rating-text">({product.reviews})</span>
                    </div>
                    <div className="collection-card-specs">
                      <div className="collection-card-spec-item">
                        <span className="collection-card-spec-label">Herkomst</span>
                        <span className="collection-card-spec-value">{product.origin}</span>
                      </div>
                      <div className="collection-card-spec-item">
                        <span className="collection-card-spec-label">Gewicht</span>
                        <span className="collection-card-spec-value">{product.weight}</span>
                      </div>
                    </div>
                    <div className="collection-card-footer">
                      <div className="collection-card-price-section">
                        <span className="collection-card-price">{product.price}</span>
                      </div>
                      <button 
                        className="collection-card-add-btn"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <span className="collection-card-btn-text">Toevoegen</span>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <line x1="12" y1="5" x2="12" y2="19"></line>
                          <line x1="5" y1="12" x2="19" y2="12"></line>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {sortedProducts.length === 0 && (
            <div className="no-products">
              <div className="no-products-content">
                <h3>Geen producten gevonden</h3>
                <p>Probeer een andere zoekterm of filterinstellingen</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default CollectionPage