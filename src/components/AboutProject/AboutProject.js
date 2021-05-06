import React from 'react';
import './AboutProject.css';

function AboutProject() {

    return (
        <section className="about" id="aboutProject">
            <h2 className="about__title">О проекте</h2>
            <div className="about__container">
                <div className="about__paragraph">
                    <p className="about_paragraph-title">Дипломный проект включал 5 этапов</p>
                    <p className="about_paragraph-text">Составление плана, работу над бэкендом,
                        вёрстку, добавление функциональности и финальные доработки.</p>
                </div>
                <div className="about__paragraph">
                    <p className="about_paragraph-title">На выполнение диплома ушло 5 недель</p>
                    <p className="about_paragraph-text">У каждого этапа был мягкий и жёсткий
                        дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
                </div>
            </div>
            <div className="about__container">
                <div className="about__backend">
                    <p className="about__weeks">1 неделя</p>
                    <p className="about__weeks-title">Back-end</p>
                </div>
                <div className="about__frontend">
                    <p className="about__weeks about__weeks_frontend">4 недели</p>
                    <p className="about__weeks-title">Front-end</p>
                </div>
            </div>
        </section>
    );
}

export default AboutProject;