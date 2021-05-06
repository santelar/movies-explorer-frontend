import React from 'react';
import './FindMovie.css';
import finderSubmit from '../../images/find-movie__submit.svg';

function FindMovie() {

    return (
        <section className="find-movie">
            <form className="find-movie__form">
                <input className="find-movie__input" placeholder="Фильмы" required></input>
                <div className="find-movie__submit-container">
                    <button type="submit" className="find-movie__submit-button">
                        <img src={finderSubmit} alt="Найти" className="find-movie__submit-pic" />
                    </button>
                </div>
            </form>
        </section >
    );
}

export default FindMovie;