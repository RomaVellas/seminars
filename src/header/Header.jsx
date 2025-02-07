import React from "react";
import { SiSemanticuireact } from "react-icons/si";

import "./header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header__left">
        <SiSemanticuireact className="header__icon" />
        <h1 className="header__title">SEMINARS</h1>
      </div>
    </div>
  );
};

export default Header;
