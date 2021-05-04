import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';
import './Register.css';

function Register() {

    return (
        <section className="register">
            <Link to="/"><img src={logo} alt="Лого" className="logo logo__register" /></Link>
            <h2 className="register__title">Добро пожаловать!</h2>
            <form className="register__form" autocomplete="off">
                <p className="register__input-name">Имя</p>
                <input autocomplete="off" type="text" className="register__input " />
                <span className="error"></span>
                <p className="register__input-name">E-mail</p>
                <input autocomplete="off" type="text" className="register__input" />
                <span className="error"></span>
                <p className="register__input-name">Пароль</p>
                <input autocomplete="off" type="password" className="register__input register__input_error" />
                <span className="error">Что-то пошло не так...</span>
                <button type="submit" className="register__button">Зарегистрироваться</button>
            </form>
            <div className="switcher">
                <p className="switcher__text">Уже зарегистрированы?</p>
                <Link to="/signin" className="switcher__link">Войти</Link>
            </div>
            <Link to="/" className="back-to-main">На главную</Link>
        </section>
    );
}

export default Register;