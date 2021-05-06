import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';
import './Login.css';

function Login() {

    return (
        <section className="login">
            <Link to="/"><img src={logo} alt="Лого" className="logo logo__login" /></Link>
            <h2 className="login__title">Рады видеть!</h2>
            <form className="login__form">
                <p className="login__input-name">E-mail</p>
                <input autocomplete="off" type="text" className="login__input"  required />
                <span className="error"></span>
                <p className="login__input-name">Пароль</p>
                <input autocomplete="off" type="password" minlength="2" maxlength="25" className="login__input"  required />
                <span className="error"></span>
                <button type="submit" className="login__button">Войти</button>
            </form>
            <div className="switcher">
                <p className="switcher__text">Ещё не зарегистрированы?</p>
                <Link to="/signup" className="switcher__link">Регистрация</Link>
            </div>
            <Link to="/" className="back-to-main">На главную</Link>
        </section>
    );
}

export default Login;