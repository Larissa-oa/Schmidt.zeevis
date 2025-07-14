import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowIcon, FishIcon, OceanIcon, ChefIcon } from '../components/icons';
import './webshopPage.css';

// Import all the required images
import alle from '../assets/alle.avif';
import macncheese2 from '../assets/macncheese2.png';
import oesters from '../assets/Oesters.png';
import kaviar from '../assets/Caviar.png';
import kantEnKlaar from '../assets/Kant-en-klaar.png';
import garnalen from '../assets/garnalen.jpg';
import oceanParadise from '../assets/Oceanparadise.png';
import conserven from '../assets/conserven.jpg';
import fishNuggets from '../assets/fish-nuggets.jpg';
import tomasu from '../assets/tomasu.jpg';
import chips from '../assets/chips.png';
import sushi from '../assets/Sushibox.png';
import oliveOil from '../assets/olive-oil.jpg';
import saldeibiza from '../assets/saldeibiza.jpg';
import socks from '../assets/socks.png';
import fishIcon from '../assets/fish-svgrepo-com.svg';

const WebshopPage = () => {
  const categories = [
    {
      id: 1,
      name: 'Alle Producten',
      image: alle,
      description: 'Bekijk ons volledige assortiment'
    },
    {
      id: 2,
      name: 'Special',
      image: macncheese2,
      description: 'Exclusieve specialiteiten'
    },
    {
      id: 3,
      name: 'Schaal- en schelpdieren',
      image: oesters,
      description: 'Verse oesters en schelpdieren'
    },
    {
      id: 4,
      name: 'Delicatessen',
      image: kaviar,
      description: 'Fijne delicatessen en luxe producten'
    },
    {
      id: 5,
      name: 'Kant-en-klaar',
      image: garnalen,
      description: 'Gerechten die direct klaar zijn'
    },
    {
      id: 6,
      name: 'Schotels',
      image: oceanParadise,
      description: 'Prachtige vis- en zeevruchtenschotels'
    },
    {
      id: 7,
      name: 'Conserven',
      image: conserven,
      description: 'Kwaliteitsconserven voor lange houdbaarheid'
    },
    {
      id: 8,
      name: 'Diepvries',
      image: fishNuggets,
      description: 'Bevroren visproducten van uitstekende kwaliteit'
    },
    {
      id: 9,
      name: 'Sauzen',
      image: tomasu,
      description: 'Heerlijke sauzen en dressings'
    },
    {
      id: 10,
      name: 'Diversen',
      image: chips,
      description: 'Overige producten en snacks'
    },
    {
      id: 11,
      name: 'Sushi',
      image: sushi,
      description: 'Verse sushi en Japanse specialiteiten'
    },
    {
      id: 12,
      name: 'Olie en Azijn',
      image: oliveOil,
      description: 'Kwaliteitsoliën en azijnen'
    },
    {
      id: 13,
      name: 'Kruiden en Specerijen',
      image: saldeibiza,
      description: 'Verse kruiden en specerijen'
    },
    {
      id: 14,
      name: 'Merchandise',
      image: socks,
      description: 'Schmidt Zeevis merchandise'
    }
  ];

  return (
    <div className="webshop-page">
      {/* Alle Producten Section - Now Hero */}
      <section className="arrangementen-section hero-section">
        <div className="container">
          <div className="arrangementen-content">
            <div className="arrangementen-text">
              <h1 className="arrangementen-title">Alle Producten</h1>
              <p className="arrangementen-description">
                Ontdek ons volledige assortiment van verse vis, zeevruchten en delicatessen. 
                Van traditionele vissoorten tot exclusieve specialiteiten, 
                wij bieden de beste kwaliteit uit de Noordzee en daarbuiten.
              </p>
              <Link to="/collection" className="explore-btn">
                <span>Bekijk alle producten</span>
                <ArrowIcon size={20} />
              </Link>
            </div>
            <div className="arrangementen-image">
              <img src={alle} alt="Alle Producten" />
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="categories-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Onze Productcategorieën</h2>
            <p className="section-subtitle">
              Ontdek ons uitgebreide assortiment van verse vis, zeevruchten en delicatessen
            </p>
          </div>
          
          <div className="categories-grid">
            {categories.map((category) => (
              <div key={category.id} className="category-card">
                <div className="category-image-container">
                  <img 
                    src={category.image} 
                    alt={category.name}
                    className="category-image"
                  />
                  <div className="category-overlay">
                    <div className="category-content">
                      <h3 className="category-title">{category.name}</h3>
                      <p className="category-description">{category.description}</p>
                      <button className="explore-btn category-btn">
                        <span>Bekijk producten</span>
                        <ArrowIcon size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section">
        <div className="container">
          <div className="about-content">
            <div className="about-header">
              <h2 className="about-title">Over Schmidt Zeevis</h2>
              <p className="about-description">
                Schmidt Zeevis is al meer dan 50 jaar een begrip in de viswereld. 
                Wij zijn gespecialiseerd in het aanbieden van de beste verse vis en zeevruchten, 
                direct van de vissers naar uw keuken. Onze passie voor kwaliteit en 
                duurzaamheid staat centraal in alles wat we doen.
              </p>
            </div>
            
            <div className="about-features">
              <div className="feature-card">
                <div className="feature-icon-wrapper">
                  <div className="feature-icon">
                    <img src={fishIcon} alt="Verse Kwaliteit" />
                  </div>
                </div>
                <div className="feature-content">
                  <h4 className="feature-title">Verse Kwaliteit</h4>
                  <p className="feature-description">Dagelijks verse vis van de beste kwaliteit, direct van de vissers naar uw keuken.</p>
                </div>
              </div>
              
              <div className="feature-card">
                <div className="feature-icon-wrapper">
                  <div className="feature-icon">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
                <div className="feature-content">
                  <h4 className="feature-title">Geverifieerd</h4>
                  <p className="feature-description">Alle producten zijn geverifieerd en voldoen aan de hoogste kwaliteitsstandaarden.</p>
                </div>
              </div>
              
              <div className="feature-card">
                <div className="feature-icon-wrapper">
                  <div className="feature-icon">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2L15.09 8.26L22 9L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9L8.91 8.26L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
                <div className="feature-content">
                  <h4 className="feature-title">Premium Kwaliteit</h4>
                  <p className="feature-description">Alleen de beste producten met premium kwaliteit en uitstekende service.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WebshopPage;
