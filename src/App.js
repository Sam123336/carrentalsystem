// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import SearchSection from "./components/SearchSection";
import IconSection from "./components/IconSection";
import WorkingSteps from "./components/WorkingSteps";
import ExperienceSection from "./components/ExperienceSection";
import FeaturedCars from "./components/FeaturedCars";
import CarListPage from "./components/CarListPage";

function App() {
  return (
    <Router>
      <div className="bg-gray-900 text-white font-sans">
        <Header />
        <Routes>
          <Route 
            path="/" 
            element={
              <>
                <HeroSection />
                <SearchSection />
                <IconSection />
                <WorkingSteps />
                <ExperienceSection />
                <FeaturedCars />
              </>
            } 
          />
          <Route path="/cars" element={<CarListPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
