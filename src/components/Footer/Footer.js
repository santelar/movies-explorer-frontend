import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './Footer.css';

function Footer() {

    return (
        <Switch>
            <Route exact path={["/", "/movies", "/saved-movies"]}>
                <section className="footer">
                    <h2 className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</h2>
                    <div className="footer__container">
                        <p className="footer__copyright">© 2021</p>
                        <nav className="footer__links">
                            <a href="https://praktikum.yandex.ru" className="footer__link"
                                target="_blank" rel="noreferrer" >Яндекс.Практикум</a>
                            <a href="https://www.linkedin.com/in/александр-пономаренко-772884207/" className="footer__link"
                                target="_blank" rel="noreferrer" >LinkedIn</a>
                            <a href="https://github.com/santelar" className="footer__link"
                                target="_blank" rel="noreferrer" >Github</a>
                        </nav>
                    </div>
                </section>
            </Route>
        </Switch>
    );
}

export default Footer;