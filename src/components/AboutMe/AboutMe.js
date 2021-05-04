import React from 'react';
import './AboutMe.css';
import myPhoto from '../../images/myPhoto4.jpg';

function AboutMe() {

    return (
        <section className="me" id="me">
            <h2 className="me__title">Студент</h2>
            <div className="me__container">

                <div className="me__img-box">
                    <img src={myPhoto} alt="Фото" className="me__img" />
                </div>

                <div className="me__text-block">
                    <h3 className="me__name">Александр</h3>
                    <p className="me__description">Фронтенд-разработчик, 37 лет</p>
                    <p className="me__story">Я начинающий веб-разработчик, нравится заниматься
                    интересными полезными проектами, нравится код как творчество.
                    Веб-разработка привлекает огромным потенциалом для
                    воплощения новых интересных идей: дизайн и интерфейсы, мультимедиа и
                        интерактивность, логика и бэкенд. </p>
                    <ul className="me__links">
                        <li className="me__link">LinkedIn</li>
                        <li className="me__link">Github</li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default AboutMe;