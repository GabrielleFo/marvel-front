import React from "react";

import Logo from "../assets/img/logo.png";

const Header = () => {
  return (
    <div className="header">
      <img src={Logo} alt="Marvel" className="logo" />
      <nav>
        <ul>
          <li>PERSONNAGES</li>
          <li>COMICS</li>
          <li>FAVORIS</li>
        </ul>
      </nav>
    </div>
  );
};
export default Header;
