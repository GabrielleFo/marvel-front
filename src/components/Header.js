import React from "react";
import { Link } from "react-router-dom";

import Logo from "../assets/img/logo.png";

const Header = () => {
  return (
    <div className="header">
      <img src={Logo} alt="Marvel" className="logo" />
      <nav>
        <ul>
          <Link to="/Character">
            <li>PERSONNAGES</li>
          </Link>
          <Link to="/Comics">
            <li>COMICS</li>
          </Link>
          <Link to="/Favorites">
            <li>FAVORIS</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
};
export default Header;
