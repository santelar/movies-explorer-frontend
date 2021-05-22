import { Link } from "react-router-dom";
import "./AuthNavigation.css";

function AuthNavigation() {
  return (
    <nav className="header__auth">
      <Link to="/signup" className="header__button header__button_register">Регистрация</Link>
      <Link to="/signin" className="header__button header__button_login">Войти</Link>
    </nav>
  );
}

export default AuthNavigation;
