import React from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import logo from '../../images/logo.svg';
import account from '../../images/account.svg';
import './Header.css';
import BurgerMenu from '../BurgerMenu/BurgerMenu';

function Header() {

    const [isBurgerOpen, setIsBurgerOpen] = React.useState(false);

    function handleBurgerOpenClick() {
        setIsBurgerOpen(true);
    }
    function handleBurgerCloseClick() {
        setIsBurgerOpen(false);
    }

    return (
        <Switch>
            <Route exact path="/">
                <header className="header">
                    <nav className="header__navigation">
                        <Link to="/"><img src={logo} alt="Лого" className="logo" /></Link>
                    </nav>
                    <div class="header__auth">
                        <Link to="/signup" className="header__button header__button_register">Регистрация</Link>
                        <Link to="/signin" className="header__button header__button_login">Войти</Link>
                    </div>
                </header>
            </Route>
            <Route path={["/profile", "/movies", "/saved-movies"]}>
                <header className="header header__logged">
                    <nav className="header__navigation">
                        <Link to="/"><img src={logo} alt="Лого" className="logo logo__logged" /></Link>
                        <Link to="/movies" className="header__movies">Фильмы</Link>
                        <Link to="/saved-movies" className="header__movies header__movies_saved">Сохраненные фильмы</Link>
                    </nav>
                    <Link to="/profile" className="header__account">
                        <img src={account} alt="Лого" className="header__account-pic" />
                        <p className="header__account-text">Аккаунт</p>
                    </Link>
                    <span type="button" className={`header__burger-button ${isBurgerOpen && 'header__burger-button_hidden'}`} onClick={handleBurgerOpenClick} />
                    <BurgerMenu
                        isOpen={isBurgerOpen}
                        onClose={handleBurgerCloseClick}
                    />
                </header>
            </Route>
        </Switch>
    );
}

export default Header;