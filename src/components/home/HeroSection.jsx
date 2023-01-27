import React, { useState } from "react";

const HeroSection = () => {
  const sectionStyle = {
    background: `linear-gradient(190deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(https://gfjules.com/wp-content/uploads/2015/08/gluten-free-white-cake-on-plate-gfJules-720x405.jpg)`,
  };

  const [selected, setSelected] = useState("");
  const array = [
    "Angel Cake",
    "Beer Cake",
    "Babka",
    "Baumkuchen",
    "Carrot Cake",
    "Chiffon Cake",
    "Esterhazy Torte",
    "Faworki",
    "Fig Cake",
    "Karpatka",
    "Lamington",
    "Lemon Cake",
    "Moon Cake",
    "Tiramisu",
    "Yule Log",
  ];

  const handleclick = () => {
    const selected = Math.floor(Math.random() * array.length);
    setSelected(array[selected]);
  };

  return (
    <section className="hero" style={sectionStyle}>
      <h2>
        Try one of our Best Sellers
        <br />
        <span className="big-title">{selected}</span>
      </h2>
      <button onClick={handleclick}>Find one you Love</button>
    </section>
  );
};

export default HeroSection;
