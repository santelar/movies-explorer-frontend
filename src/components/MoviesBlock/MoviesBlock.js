import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './MoviesBlock.css';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesBlock() {

    return (
        <Switch>
            <Route path="/movies">
                <section className="movie-block">
                    <div className="movie-block__container">
                        <MoviesCard />
                    </div>
                </section>
            </Route>
            <Route path="/saved-movies">
                <section className="movie-block">
                    <div className="movie-block__container">
                        <MoviesCard />
                    </div>
                </section>
            </Route>
        </Switch>
    );
}

export default MoviesBlock;