import React from "react";

const HeroSection = () => {
    const sectionStyle = {
        background: `linear-gradient(190deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(https://gfjules.com/wp-content/uploads/2015/08/gluten-free-white-cake-on-plate-gfJules-720x405.jpg)`
    };

    return (
        <section className="hero" style={sectionStyle}>
            <h2>Try one of our Best Sellers
                <br />
                <span className="big-title">
                    Choco Woko
                </span>
            </h2>
            <button>Find one you Love</button>
        </section>
    )
};

export default HeroSection;