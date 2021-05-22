import { Link, useLocation } from "react-router-dom";
import "../Header/Header.css";
import "./MoviesNavigation.css";
import account from '../../images/account.svg';

function MoviesNavigation() {

  const location = useLocation().pathname;

  return (
    <div className="header__menu">
      <div className="header__movie-container">
        <Link to="/movies" className={location === "/movies" ? "header__account header__account_bold" : "header__account"}>
          Фильмы
          </Link>
        <Link to="/saved-movies" className={location === "/saved-movies" ? "header__account header__account_bold" : "header__account"}>
          Сохраненные фильмы
          </Link>
      </div>

      <div className="header__movie-container">
        <Link to="/profile" className="header__account-btn">
          <img src={account} alt="Лого" className="header__account-pic" />
          <p className="header__account-text">Аккаунт</p>
        </Link>

        <div className="header__hamburger-menu">
          <input id="menu__toggle" type="checkbox" />
          <label className="menu__btn" htmlFor="menu__toggle">
            <span></span>
          </label>
          <div className="menu__box">
            <Link to="/" className="menu__item">
              Главная
              </Link>
            <Link to="/movies" className="menu__item">
              Фильмы{" "}
            </Link>
            <Link to="/saved-movies" className="menu__item">
              {" "}
                Сохраненные фильмы{" "}
            </Link>
            <Link to="/profile" className="header__account-burger">
              <img src={account} alt="Лого" className="header__account-pic" />
              <p className="header__account-text">Аккаунт</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MoviesNavigation;
