import React from 'react';
import { Link } from 'react-router-dom';
import './BurgerMenu.css';
import account from '../../images/account.svg';

function BurgerMenu({ isOpen, onClose }) {

    return (
        <section className={`burger-menu ${isOpen && 'burger-menu_open'}`}>
            <div className="burger-menu__overlay"></div>
            <button type="button" className="burger-menu__close" onClick={onClose}></button>
            <nav className="burger-menu__container">
                <Link to="/" className="burger-menu__item" onClick={onClose}>Главная</Link>
                <Link to="/movies" className="burger-menu__item" onClick={onClose}>Фильмы</Link>
                <Link to="/saved-movies" className="burger-menu__item" onClick={onClose}>Сохраненные фильмы</Link>
                <Link to="/profile" className="burger-menu__account" onClick={onClose}>
                    <img src={account} alt="Лого" className="header__account-pic" />
                    <p className="header__account-text">Аккаунт</p>
                </Link>
            </nav>

        </section>

    )

}

export default BurgerMenu;
