import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Header from './components/Header';
import PortfolioGrid from './components/PortfolioGrid';
import Bureau from './components/Bureau';
import About from './components/About';
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/portfolio/architecture"
          element={
            <>
              <Header />
              <PortfolioGrid category="Architecture" />
              <Footer />
            </>
          }
        />
        <Route
          path="/portfolio/industrial-design"
          element={
            <>
              <Header />
              <PortfolioGrid category="Industrial Design" />
              <Footer />
            </>
          }
        />
        <Route
          path="/portfolio/art-direction"
          element={
            <>
              <Header />
              <PortfolioGrid category="Art Direction" />
              <Footer />
            </>
          }
        />
        <Route
          path="/portfolio/brand-identity"
          element={
            <>
              <Header />
              <PortfolioGrid category="Brand Identity" />
              <Footer />
            </>
          }
        />
        <Route
          path="/portfolio"
          element={
            <>
              <Header />
              <PortfolioGrid />
              <Footer />
            </>
          }
        />
        <Route
          path="/about"
          element={
            <>
              <Header />
              <About />
              <Footer />
            </>
          }
        />
        <Route path="/" element={<BureauToPortfolio />} />
      </Routes>
    </Router>
  );
};

// Landing screen that forwards to the portfolio index on click
const BureauToPortfolio = () => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate('/portfolio')}
      style={{ height: '100vh', width: '100vw' }}
    >
      <Bureau />
      <Footer />
    </div>
  );
};

export default App;
