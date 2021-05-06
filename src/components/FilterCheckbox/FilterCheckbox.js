import React from 'react';
import './FilterCheckbox.css';

function FilterCheckbox() {
    return (
        <section className="filter-checkbox">
            <div className="filter-checkbox__container">
                <label className="filter-checkbox__toggle">
                    <input className="filter-checkbox__input" type="checkbox" />
                    <span className="filter-checkbox__slider" />
                </label>
                <p className="filter-checkbox__text">Короткометражки</p>
            </div>
        </section >
    );
}

export default FilterCheckbox;