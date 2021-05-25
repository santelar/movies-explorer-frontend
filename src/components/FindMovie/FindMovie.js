import React from "react";
import "./FindMovie.css";
import finderSubmit from '../../images/find-movie__submit.svg';

function FindMovie({ onSubmitSearch, onFilterShort, isLoading }) {

  const [query, setQuery] = React.useState('');
  const [isSubmitDisabled, setIsSubmitDisabled] = React.useState(false);

  function handleOnChange(evt) {
    setQuery(evt.target.value);
  }

  function handleOnSubmit(evt) {
    evt.preventDefault();
    onSubmitSearch(query);
  }

  function handleOnChangeFilter(evt) {
    onFilterShort(evt.target.checked);
  }

  React.useEffect(() => {
    setIsSubmitDisabled(query === '');
  }, [query])

  return (
    <section className="find-movie">
      <form className="find-movie__form" onSubmit={handleOnSubmit}>
        <input
          className="find-movie__input"
          type="text"
          name="movie"
          placeholder="Фильмы"
          required
          onChange={handleOnChange}
          disabled={isLoading}
        />
        <div className="find-movie__submit-container">
          <button
            type="submit"
            className={`find-movie__submit-button ${isSubmitDisabled && 'find-movie__submit-button_disabled'}`}
            disabled={isSubmitDisabled || isLoading}
          >
            <img src={finderSubmit} alt="Найти" className="find-movie__submit-pic" />
          </button>
        </div>
      </form>

      <div className="filter-checkbox">
        <input
          type="checkbox"
          name="toggle"
          id="toggle-button"
          className="filter-checkbox__input" onChange={handleOnChangeFilter}
        />
         <label htmlFor="filter-checkbox__input" className="filter-checkbox__text">
          Короткометражки
          </label>
      </div>

    </section >
  );
}

export default FindMovie;
