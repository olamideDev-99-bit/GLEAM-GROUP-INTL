import React, { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Product from './pages/Product'
import Gears from './pages/Gears'
import SplashScreen from './components/SplashScreen'
import ScrollToTop from './components/ScrollToTop'

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate initial loading sequence
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500); // 2.5 seconds Splash Screen

    return () => clearTimeout(timer);
  }, []);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        {loading ? (
          <SplashScreen />
        ) : (
          <>
            <Header />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/products" element={<Product />} />
                <Route path="/gears" element={<Gears />} />
              </Routes>
            </main>
            <Footer />
          </>
        )}
      </div>
    </BrowserRouter>
  )
}

export default App