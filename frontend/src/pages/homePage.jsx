import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavComponent from '../features/globalFeatures/navigationFeat/navComponent';
import HeroSection from '../features/heroSection/heroSec';
import Footer from '../features/globalFeatures/footer/footer';

function HomePage() {
  return (
    <div className="HomePage">
      <NavComponent />
      <HeroSection />
      <Footer />
    </div>
  );
}

export default HomePage;
