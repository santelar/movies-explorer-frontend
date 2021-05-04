import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './NextButton.css';

function NextButton() {

    return (
        <Switch>
            <Route path="/movies">
                <section className="next">
                    <button className="next__button">Еще</button>
                </section>
            </Route>
        </Switch>
    );
}

export default NextButton;