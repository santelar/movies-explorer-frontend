import React from 'react';
import FindMovie from '../FindMovie/FindMovie';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import MoviesBlock from '../MoviesBlock/MoviesBlock';
import NextButton from '../NextButton/NextButton';

function Movies() {

    return (
        <>
            <FindMovie />
            <FilterCheckbox />
            <MoviesBlock />
            <NextButton />
        </>
    );
}

export default Movies;