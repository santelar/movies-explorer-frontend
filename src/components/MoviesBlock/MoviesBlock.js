/* eslint-disable react-hooks/exhaustive-deps */
import { React, useState, useEffect } from "react";
import "./MoviesBlock.css";
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesBlock({ savedMovies, movies, onBookmarkClick, isSavedMovie }) {

  const [extraPortion, setExtraPortion] = useState(3);
  const [currentCount, setCurrentCount] = useState(0);
  const [renderMovies, setRenderMovies] = useState([]);

  function getCount(windowSize) {
    if (windowSize > 768) {
      return { first: 12, extra: 3 }
    } else if (windowSize > 480 && windowSize <= 768) {
      return { first: 8, extra: 2 }
    } else {
      return { first: 5, extra: 2 }
    }
  }

  function renderExtraPortion() {
    const count = Math.min(movies.length, currentCount + extraPortion);
    const extraMovies = movies.slice(currentCount, count)
    setRenderMovies([...renderMovies, ...extraMovies]);
    setCurrentCount(count);
  }

  function handleResize() {
    const windowSize = window.innerWidth;
    const sizePortion = getCount(windowSize);
    setExtraPortion(sizePortion.extra);
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const windowSize = window.innerWidth;
    const sizePortion = getCount(windowSize);
    setExtraPortion(sizePortion.extra);
    const count = Math.min(movies.length, sizePortion.first);
    setRenderMovies(movies.slice(0, count));
    setCurrentCount(count);
  }, [movies])

  function handleMoreCards() {
    renderExtraPortion();
  }

  return (
    <>
      <section className="movie-block">
        <div className="movie-block__template">
          {
            renderMovies.map((movie) => (
              <MoviesCard
                savedMovies={savedMovies}
                key={movie.id}
                movie={movie}
                onBookmarkClick={onBookmarkClick}
                isSavedMovie={isSavedMovie}
              />
            ))
          }
        </div>
      </section>
      { currentCount < movies.length &&
        <div className="next">
          <button className="next__button" type="button" onClick={handleMoreCards}>
            Еще
      </button>
        </div>}
    </>
  );
}

export default MoviesBlock;
