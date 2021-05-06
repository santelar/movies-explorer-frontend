import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './MoviesCard.css';

import movieOne from '../../images/movie1.png';
import movieTwo from '../../images/movie2.png';
import movieThree from '../../images/movie3.png';
import movieFour from '../../images/movie4.png';
import movieFive from '../../images/movie5.png';
import movieSix from '../../images/movie6.png';
import movieSeven from '../../images/movie7.png';
import movieEight from '../../images/movie8.png';
import movieNine from '../../images/movie9.png';
import movieTen from '../../images/movie10.png';
import movieEleven from '../../images/movie11.png';
import movieTvelve from '../../images/movie12.png';

import like from '../../images/likeImg.svg';
import delButton from '../../images/delImg.svg';

function MoviesCard() {

    return (
        <Switch>
            <Route path="/movies">
                <figure className="movie-card">
                    <img src={movieOne} alt="Фильм" className="movie-card__image" />
                    <button className="movie-card__like ">Сохранить</button>
                    <button className="movie-card__like-container movie-card__like-container_hiden">
                        <img src={like} className="movie-card__like-active" alt="Лайк" />
                    </button>
                    <div className="movie-card__description">
                        <p className="movie-card__name">33 слова о дизайне</p>
                        <p className="movie-card__duration">1 ч 17 мин</p>
                    </div>
                </figure>
                <figure className="movie-card">
                    <img src={movieTwo} alt="Фильм" className="movie-card__image" />
                    <button className="movie-card__like movie-card__like_hiden">Сохранить</button>
                    <button className="movie-card__like-container">
                        <img src={like} className="movie-card__like-active" alt="Лайк" />
                    </button>
                    <div className="movie-card__description">
                        <p className="movie-card__name">Киноальманах «100 лет дизайна»</p>
                        <p className="movie-card__duration">1 ч 17 мин</p>
                    </div>
                </figure>
                <figure className="movie-card">
                    <img src={movieThree} alt="Фильм" className="movie-card__image" />
                    <button className="movie-card__like">Сохранить</button>
                    <button className="movie-card__like-container movie-card__like-container_hiden">
                        <img src={like} className="movie-card__like-active" alt="Лайк" />
                    </button>
                    <div className="movie-card__description">
                        <p className="movie-card__name">В погоне за Бенкси</p>
                        <p className="movie-card__duration">1 ч 17 мин</p>
                    </div>
                </figure>
                <figure className="movie-card">
                    <img src={movieFour} alt="Фильм" className="movie-card__image" />
                    <button className="movie-card__like">Сохранить</button>
                    <button className="movie-card__like-container movie-card__like-container_hiden">
                        <img src={like} className="movie-card__like-active" alt="Лайк" />
                    </button>
                    <div className="movie-card__description">
                        <p className="movie-card__name">Баския: Взрыв реальности</p>
                        <p className="movie-card__duration">1 ч 17 мин</p>
                    </div>
                </figure>
                <figure className="movie-card">
                    <img src={movieFive} alt="Фильм" className="movie-card__image" />
                    <button className="movie-card__like">Сохранить</button>
                    <button className="movie-card__like-container movie-card__like-container_hiden">
                        <img src={like} className="movie-card__like-active" alt="Лайк" />
                    </button>
                    <div className="movie-card__description">
                        <p className="movie-card__name">Бег это свобода</p>
                        <p className="movie-card__duration">1 ч 17 мин</p>
                    </div>
                </figure>
                <figure className="movie-card">
                    <img src={movieSix} alt="Фильм" className="movie-card__image" />
                    <button className="movie-card__like movie-card__like_hiden">Сохранить</button>
                    <button className="movie-card__like-container">
                        <img src={like} className="movie-card__like-active" alt="Лайк" />
                    </button>
                    <div className="movie-card__description">
                        <p className="movie-card__name">Книготорговцы</p>
                        <p className="movie-card__duration">1 ч 17 мин</p>
                    </div>
                </figure>
                <figure className="movie-card">
                    <img src={movieSeven} alt="Фильм" className="movie-card__image" />
                    <button className="movie-card__like">Сохранить</button>
                    <button className="movie-card__like-container movie-card__like-container_hiden">
                        <img src={like} className="movie-card__like-active" alt="Лайк" />
                    </button>
                    <div className="movie-card__description">
                        <p className="movie-card__name">Когда я думаю о Германии ночью</p>
                        <p className="movie-card__duration">1 ч 17 мин</p>
                    </div>
                </figure>
                <figure className="movie-card">
                    <img src={movieEight} alt="Фильм" className="movie-card__image" />
                    <button className="movie-card__like">Сохранить</button>
                    <button className="movie-card__like-container movie-card__like-container_hiden">
                        <img src={like} className="movie-card__like-active" alt="Лайк" />
                    </button>
                    <div className="movie-card__description">
                        <p className="movie-card__name">Gimme Danger: История Игги и The Stooges</p>
                        <p className="movie-card__duration">1 ч 17 мин</p>
                    </div>
                </figure>
                <figure className="movie-card">
                    <img src={movieNine} alt="Фильм" className="movie-card__image" />
                    <button className="movie-card__like">Сохранить</button>
                    <button className="movie-card__like-container movie-card__like-container_hiden">
                        <img src={like} className="movie-card__like-active" alt="Лайк" />
                    </button>
                    <div className="movie-card__description">
                        <p className="movie-card__name">Дженис: Маленькая девочка грустит</p>
                        <p className="movie-card__duration">1 ч 17 мин</p>
                    </div>
                </figure>
                <figure className="movie-card">
                    <img src={movieTen} alt="Фильм" className="movie-card__image" />
                    <button className="movie-card__like">Сохранить</button>
                    <button className="movie-card__like-container movie-card__like-container_hiden">
                        <img src={like} className="movie-card__like-active" alt="Лайк" />
                    </button>
                    <div className="movie-card__description">
                        <p className="movie-card__name">Соберись перед прыжком</p>
                        <p className="movie-card__duration">1 ч 17 мин</p>
                    </div>
                </figure>
                <figure className="movie-card">
                    <img src={movieEleven} alt="Фильм" className="movie-card__image" />
                    <button className="movie-card__like">Сохранить</button>
                    <button className="movie-card__like-container movie-card__like-container_hiden">
                        <img src={like} className="movie-card__like-active" alt="Лайк" />
                    </button>
                    <div className="movie-card__description">
                        <p className="movie-card__name">Пи Джей Харви: A dog called money</p>
                        <p className="movie-card__duration">1 ч 17 мин</p>
                    </div>
                </figure>
                <figure className="movie-card">
                    <img src={movieTvelve} alt="Фильм" className="movie-card__image" />
                    <button className="movie-card__like">Сохранить</button>
                    <button className="movie-card__like-container movie-card__like-container_hiden">
                        <img src={like} className="movie-card__like-active" alt="Лайк" />
                    </button>
                    <div className="movie-card__description">
                        <p className="movie-card__name">По волнам: Искусство звука в кино</p>
                        <p className="movie-card__duration">1 ч 17 мин</p>
                    </div>
                </figure>
            </Route>
            <Route path="/saved-movies">
                <figure className="movie-card">
                    <img src={movieOne} alt="Фильм" className="movie-card__image" />
                    <button className="movie-card__like  movie-card__like_hiden">Сохранить</button>
                    <img src={delButton} type="button" className="movie-card__delete" alt="Сохранен"></img>
                    <div className="movie-card__description">
                        <p className="movie-card__name">33 слова о дизайне</p>
                        <p className="movie-card__duration">1 ч 17 мин</p>
                    </div>
                </figure>
                <figure className="movie-card">
                    <img src={movieTwo} alt="Фильм" className="movie-card__image" />
                    <button className="movie-card__like movie-card__like_hiden">Сохранить</button>
                    <img src={delButton} type="button" className="movie-card__delete" alt="Сохранен"></img>
                    <div className="movie-card__description">
                        <p className="movie-card__name">Киноальманах «100 лет дизайна»</p>
                        <p className="movie-card__duration">1 ч 17 мин</p>
                    </div>
                </figure>
                <figure className="movie-card">
                    <img src={movieThree} alt="Фильм" className="movie-card__image" />
                    <button className="movie-card__like  movie-card__like_hiden">Сохранить</button>
                    <img src={delButton} type="button" className="movie-card__delete" alt="Сохранен"></img>
                    <div className="movie-card__description">
                        <p className="movie-card__name">В погоне за Бенкси</p>
                        <p className="movie-card__duration">1 ч 17 мин</p>
                    </div>
                </figure>
            </Route>
        </Switch>

    );
}

export default MoviesCard;