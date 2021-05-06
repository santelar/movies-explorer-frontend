import React from 'react';
import './Portfolio.css';

function Portfolio() {

    return (
        <section className="portfolio">
            <h2 className="portfolio__title">Портфолио</h2>
            <div className="portfolio__block">
                <a href="https://santelar.github.io/how-to-learn/index.html" className="portfolio__button" target="_blank" rel="noreferrer" >
                    <p className="portfolio__subtitle" >Статичный сайт</p>
                    <span className="portfolio__link">↗</span>
                </a>
                <a href="https://santelar.github.io/russian-travel/index.html" className="portfolio__button" target="_blank" rel="noreferrer" >
                    <p className="portfolio__subtitle" >Адаптивный сайт</p>
                    <span className="portfolio__link">↗</span>
                </a>
                <a href="http://santelar.nomoredomains.icu/" className="portfolio__button" target="_blank" rel="noreferrer" >
                    <p className="portfolio__subtitle" >Одностраничное приложение</p>
                    <span className="portfolio__link">↗</span>
                </a>

            </div>
        </section>
    );
}

export default Portfolio;