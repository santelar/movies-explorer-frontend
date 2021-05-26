import React from 'react';
import './AboutMe.css';
import myPhoto from '../../images/myPhoto.jpg';

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
          <p className="me__story">Нравится заниматься интересными полезными проектами,
          нравится код как творчество. Веб-разработка привлекает огромным потенциалом для
          воплощения новых идей: дизайн и интерфейсы, мультимедиа и интерактивность, логика и бэкенд. </p>
          <nav className="me__links">
            <a href="https://www.linkedin.com/in/александр-пономаренко-772884207/" className="me__link"
              target="_blank" rel="noreferrer" >LinkedIn</a>
            <a href="https://github.com/santelar" className="me__link"
              target="_blank" rel="noreferrer" >Github</a>
          </nav>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
