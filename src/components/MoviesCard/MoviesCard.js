import React from "react";
import "./MoviesCard.css";
import { Route } from 'react-router-dom';
import defaultMovieImage from '../../images/defaultMovieImage.jpg';

function MoviesCard({ savedMovies, movie, onBookmarkClick, isSavedMovie }) {
  const { nameRU, duration, trailer, image } = movie;

  const isSaved = isSavedMovie(movie);

  function durationFormat(duration) {
    const hh = Math.trunc(duration / 60);
    const mm = duration % 60;
    return `${hh > 0 ? hh + "ч " : ""}${mm}м`;
  }

  function handleBookmarkClick(evt) {
    evt.preventDefault();
    onBookmarkClick(movie, !isSaved);
  }

  function handleDelete() {
    onBookmarkClick(movie, false);
  }

  return (
    <li className="movie">
      <a href={trailer}>
        <img src={image || defaultMovieImage} alt="Фото фильма" className="movie__image" target="_blank" rel="noreferrer" />
      </a>
      <div className="movie__text-container">
        <p className="movie__title">{nameRU}</p>
        <span className="movie__duration">{durationFormat(duration)}</span>
      </div>

      <Route exact path="/movies">
        <button
          className={`movie__save-button ${isSaved && 'movie__saved-icon'}`}
          onClick={handleBookmarkClick}
        >
          {!isSaved && 'Cохранить'}
        </button>
      </Route>

      <Route exact path="/saved-movies">
        <button
          className="movie__remove-icon"
          onClick={handleDelete}
        ></button>
      </Route>

    </li>
  );
}

export default MoviesCard;
