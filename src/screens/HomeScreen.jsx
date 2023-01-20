import React from "react";
import HeroSection from "../components/home/HeroSection";

const HomeScreen = () => {
    return (
        <div className="main-page">
            <HeroSection />
            <button>Create Custom Order</button>
            <h2>Popular Reviews</h2>
        </div>
    )
};

export default HomeScreen;