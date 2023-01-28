import React from "react";
import HeroSection from "../components/home/HeroSection";
import { Link } from "react-router-dom";
import ReviewOne from "../components/home/ReviewOne";
import ReviewTwo from "../components/home/ReviewTwo";
import ReviewThree from "../components/home/ReviewThree";

const HomeScreen = () => {
  return (
    <div className="main-page">
      <HeroSection />
      <Link to="/order">
        <button>Create Custom Order</button>
      </Link>
      <h2>Popular Reviews</h2>
      <div className="reviews">
        <ReviewOne />
        <ReviewTwo />
        <ReviewThree />
      </div>
    </div>
  );
};

export default HomeScreen;
