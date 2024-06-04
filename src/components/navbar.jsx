import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import "./navbar.css";
import "./Eqo white.png"
export const Navbar = () => {
  return (
    <div className="navbar"> 
      <img className='Logo' src={require("./Eqo white.png")} alt="Logo" />
      <div className="links">
        <Link to="/"> Boutique </Link>
        <Link to="/contact"> Contact </Link>
        <Link to="/cart">
          <ShoppingCart size={32} />
        </Link>
      </div>
    </div>
  );
};
