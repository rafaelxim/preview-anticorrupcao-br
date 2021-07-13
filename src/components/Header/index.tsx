import React from "react";
import logo from "../../assets/brMalls_logo.svg";
import logoAnticorrup from "../../assets/anticorrupcao.png";
import "./styles.scss";

const Header: React.FC = () => {
  return (
    <div className="head__header">
      <img className="head__logo" src={logo} alt="brMallsLogo" />
      <img
        className="head__logoAnticorrupcao"
        src={logoAnticorrup}
        alt="anticorrupcao_logo"
      />
    </div>
  );
};

export default Header;
