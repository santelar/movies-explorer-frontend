import React from 'react';
import { Link } from 'react-router-dom';
import './Profile.css';

function Profile() {

    return (
        <section className="profile">
            <h2 className="profile__title">Привет, Александр!</h2>
            <form className="profile__form" autocomplete="off">
                <div className="profile__data-line">
                    <p className="profile__line-title">Имя</p>
                    <input type="text" className="profile__edit" />
                    <span className="error"></span>
                </div>
                <span className="profile__line"></span>
                <div className="profile__data-line">
                    <p className="profile__line-title">E-mail</p>
                    <input type="email" className="profile__edit" />
                    <span className="error"></span>
                </div>
                <button type="submit" className="profile__button">Редактировать</button>
                <Link to="/" className="profile__exit">Выйти из аккаунта</Link>
            </form>
        </section>
    );
}

export default Profile;