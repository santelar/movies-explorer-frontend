import React from 'react';
import './Portfolio.css';

function Portfolio() {

    return (
        <section className="portfolio">
            <h2 className="portfolio__title">Портфолио</h2>
            <div className="portfolio__block">
                <div className="portfolio__button">
                    <h3 className="portfolio__subtitle">Статичный сайт</h3>
                    <span className="portfolio__link">↗</span>
                </div>
                <div className="portfolio__button">
                    <h3 className="portfolio__subtitle">Адаптивный сайт</h3>
                    <span className="portfolio__link">↗</span>
                </div>
                <div className="portfolio__button">
                    <h3 className="portfolio__subtitle">Одностраничное приложение</h3>
                    <span className="portfolio__link">↗</span>
                </div>
            </div>
        </section>
    );
}

export default Portfolio;