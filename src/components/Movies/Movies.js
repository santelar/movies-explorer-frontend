/* eslint-disable no-unused-vars */
import React from "react";
import FindMovie from "../FindMovie/FindMovie";
import Preloader from "../Preloader/Preloader";
import MoviesBlock from "../MoviesBlock/MoviesBlock";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import './Movies.css';

function Movies(
  {
    isLogin,
    savedMovies,
    onSubmitSearch,
    movies,
    isLoading,
    loadingError,
    onBookmarkClick,
    isSavedMovie
  }) {

  const [shortFilm, setShortFilm] = React.useState(false);

  function onFilterShort(filterOn) {
    setShortFilm(filterOn);
  }

  function filterShortFilm(movies) {
    return movies.filter((item) => {
      return item.duration < 40;
    })
  }

  return (
    <>
      <Header
        isLogin={isLogin}
      />
      <FindMovie
        onSubmitSearch={onSubmitSearch}
        onFilterShort={onFilterShort}
        isLoading={isLoading} />

      {isLoading && <Preloader />}

      {!isLoading && loadingError === '' &&
        <MoviesBlock
          savedMovies={savedMovies}
          movies={shortFilm ? filterShortFilm(movies) : movies}
          onBookmarkClick={onBookmarkClick}
          isSavedMovie={isSavedMovie}
        />
      }

      {
        !isLoading && loadingError !== '' && <div className="movies__info">{loadingError}</div>
      }

      <Footer />
    </>
  );
}

export default Movies;
