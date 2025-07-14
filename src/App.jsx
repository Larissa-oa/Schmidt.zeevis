import './App.css'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import CollectionPage from './pages/CollectionPage'
import ProductPage1 from './pages/ProductPage1'
import ProductPage2 from './pages/ProductPage2'
import ProductPage3 from './pages/ProductPage3'
import WebshopPage from './pages/webshopPage'

function App() {
  return (
    <div className="app">
      <Navbar />
        <Routes>
          <Route path="/" element={<WebshopPage />} />
          <Route path="/collection" element={<CollectionPage />} />
          <Route path="/product/mac-n-cheese" element={<ProductPage1 />} />
          <Route path="/product/chips" element={<ProductPage2 />} />
          <Route path="/product/kreeft" element={<ProductPage3 />} />
        </Routes>
        <Footer />
    </div>
  )
}

export default App
