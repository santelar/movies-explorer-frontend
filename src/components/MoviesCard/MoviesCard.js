import React from "react";
import "./MoviesCard.css";
import defaultMovieImage from '../../images/defaultMovieImage.jpg';

function MoviesCard({ savedMovies, movie, onBookmarkClick, isSavedMovie }) {
  const { nameRU, duration, trailer, image } = movie;

  let isSaved = isSavedMovie(movie);

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

      <button
        className={`movie__save-button ${isSaved && 'movie__saved-icon'}`}
        onClick={!isSaved ? handleBookmarkClick : handleDelete}
      >
        {!isSaved && 'Cохранить'}
      </button>
    </li>
  );
}

export default MoviesCard;
