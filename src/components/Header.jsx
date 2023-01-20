import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <Link to="">
        <p>Cakes 4 Us</p>
      </Link>
      <nav>
        <Link to="/cart">
          <FaShoppingCart color="white" size="25px" />
        </Link>
      </nav>
    </header>
  );
};

export default Header;
