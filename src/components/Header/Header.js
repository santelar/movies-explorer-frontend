import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";
import mainLogo from "../../images/logo.svg";
import AuthNavigation from "../AuthNavigation/AuthNavigation";
import MoviesNavigation from "../MoviesNavigation/MoviesNavigation";

function Header({ isLogin }) {
  const location = useLocation().pathname;

  return (
    <header className={location === "/" ? "header" : "header header_black"}>
      <Link to="/">
        <div className="header__logo">
          <img alt="лого" src={mainLogo} />
        </div>
      </Link>
      {isLogin ? <MoviesNavigation /> : <AuthNavigation />}
    </header>
  );
}

export default Header;
