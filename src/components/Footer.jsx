import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './Footer.css';

import L from 'leaflet';
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const Footer = () => {

  const vendorLocation = [51.9225, 4.4792]; 

  return (
    <footer className="footer">
      <div className="container">
        {/* Main Footer Content */}
        <div className="footer-content">
          {/* Company Info Section */}
          <div className="footer-section">
            <h3 className="footer-title">Koninklijke Schmidt Zeevis Rotterdam</h3>
            <p className="footer-description">
              De mooiste viswinkel van Rotterdam. Meer dan 100 jaar ervaring in verse vis van de hoogste kwaliteit.
            </p>
            <div className="social-links">
              <a href="#" className="social-link" aria-label="Instagram">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" stroke="currentColor" strokeWidth="2"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" stroke="currentColor" strokeWidth="2"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </a>
              <a href="#" className="social-link" aria-label="Facebook">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M18 2H15C13.6739 2 12.4021 2.52678 11.4645 3.46447C10.5268 4.40215 10 5.67392 10 7V10H7V14H10V22H14V14H17L18 10H14V7C14 6.73478 14.1054 6.48043 14.2929 6.29289C14.4804 6.10536 14.7348 6 15 6H18V2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a href="#" className="social-link" aria-label="LinkedIn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M16 8A6 6 0 0 1 18 20H6A6 6 0 0 1 6 8H16Z" stroke="currentColor" strokeWidth="2"/>
                  <path d="M12 14V20" stroke="currentColor" strokeWidth="2"/>
                  <path d="M8 16V20" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links Section */}
          <div className="footer-section">
            <h4 className="footer-subtitle">Handige links</h4>
            <ul className="footer-links">
              <li><a href="#" className="footer-link">Viskalender</a></li>
              <li><a href="#" className="footer-link">Webwinkel</a></li>
              <li><a href="#" className="footer-link">Cadeaukaart</a></li>
              <li><a href="#" className="footer-link">Vacatures</a></li>
              <li><a href="#" className="footer-link">Zeemijlen</a></li>
            </ul>
          </div>

          {/* Customer Service Section */}
          <div className="footer-section">
            <h4 className="footer-subtitle">Klantenservice</h4>
            <ul className="footer-links">
              <li><a href="#" className="footer-link">Bestellen en bezorgen</a></li>
              <li><a href="#" className="footer-link">Bestellen horeca</a></li>
              <li><a href="#" className="footer-link">Veelgestelde vragen</a></li>
              <li><a href="#" className="footer-link">Algemene voorwaarden</a></li>
              <li><a href="#" className="footer-link">Privacy statement</a></li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="footer-section">
            <h4 className="footer-subtitle">Contact</h4>
            <div className="contact-info">
              <div className="contact-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="contact-icon">
                  <path d="M21 10C21 17 12 23 12 23S3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <div>
                  <p className="contact-label">Adres</p>
                  <p className="contact-value">Matlingeweg 333</p>
                  <p className="contact-value">3044 EV, Rotterdam</p>
                </div>
              </div>
              
              <div className="contact-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="contact-icon">
                  <path d="M22 16.92V19.92C22.0011 20.1985 21.9441 20.4742 21.8325 20.7294C21.7209 20.9846 21.5573 21.2136 21.3521 21.4019C21.1469 21.5901 20.9046 21.7335 20.6407 21.8227C20.3769 21.9119 20.0973 21.9451 19.82 21.92C16.7428 21.5856 13.787 20.5341 11.19 18.85C8.77382 17.3146 6.72533 15.2661 5.18999 12.85C3.49997 10.2412 2.44824 7.27099 2.11999 4.18C2.09494 3.90347 2.12787 3.62463 2.21649 3.36139C2.30512 3.09816 2.44756 2.85643 2.63476 2.65171C2.82196 2.44699 3.0498 2.28362 3.30379 2.17182C3.55778 2.06002 3.83233 2.00212 4.10999 2.00001H7.10999C7.59522 1.99522 8.06558 2.16708 8.43371 2.48353C8.80184 2.79999 9.04201 3.23945 9.10999 3.72001C9.23662 4.68007 9.47144 5.62273 9.80999 6.53001C9.94454 6.88792 9.97345 7.27691 9.89381 7.65382C9.81417 8.03073 9.62985 8.36858 9.35999 8.63001L8.08999 9.90001C9.51443 12.3636 11.6364 14.4856 14.1 15.91L15.37 14.64C15.6314 14.3701 15.9693 14.1858 16.3462 14.1062C16.7231 14.0265 17.1121 14.0554 17.47 14.19C18.3773 14.5286 19.3199 14.7634 20.28 14.89C20.7658 14.9585 21.2094 15.2032 21.5265 15.5775C21.8437 15.9518 22.0122 16.4296 22 16.92Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <div>
                  <p className="contact-label">Telefoon</p>
                  <a href="tel:0102140673" className="contact-value contact-link">010 – 214 06 73</a>
                </div>
              </div>
              
              <div className="contact-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="contact-icon">
                  <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <polyline points="22,6 12,13 2,6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <div>
                  <p className="contact-label">Email</p>
                  <a href="mailto:info@schmidtzeevis.nl" className="contact-value contact-link">info@schmidtzeevis.nl</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="footer-map-section">
          <h4 className="footer-subtitle">Bezoek onze winkel</h4>
          <div className="map-container">
            <MapContainer 
              center={vendorLocation} 
              zoom={15} 
              className="footer-map"
              zoomControl={false}
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              <Marker position={vendorLocation}>
                <Popup>
                  <div className="map-popup">
                    <h5>Koninklijke Schmidt Zeevis Rotterdam</h5>
                    <p>Matlingeweg 333</p>
                    <p>3044 EV, Rotterdam</p>
                    <a 
                      href="https://maps.google.com/?q=Matlingeweg+333,+3044+EV+Rotterdam" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="map-directions-btn"
                    >
                      Route plannen
                    </a>
                  </div>
                </Popup>
              </Marker>
            </MapContainer>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p className="copyright">
              © {new Date().getFullYear()} Schmidt Zeevis. Alle rechten voorbehouden.
            </p>
            <div className="footer-bottom-links">
              <a href="#" className="footer-bottom-link">Algemene voorwaarden</a>
              <a href="#" className="footer-bottom-link">Privacy statement</a>
              <a href="#" className="footer-bottom-link">Disclaimer</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
