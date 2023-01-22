import React from "react";
import HeroSection from "../components/home/HeroSection";
import { Link } from "react-router-dom";

const HomeScreen = () => {
  return (
    <div className="main-page">
      <HeroSection />
      <Link to="/order">
        <button>Create Custom Order</button>
      </Link>
      <h2>Popular Reviews</h2>
    </div>
  );
};

export default HomeScreen;
