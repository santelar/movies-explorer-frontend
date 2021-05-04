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
                        <ul className="footer__links">
                            <li className="footer__link">Яндекс.Практикум</li>
                            <li className="footer__link">LinkedIn</li>
                            <li className="footer__link">Github</li>
                        </ul>
                    </div>
                </section>
            </Route>
        </Switch>
    );
}

export default Footer;