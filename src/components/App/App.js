/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { Redirect, Route, Switch, useHistory, useLocation } from "react-router-dom";
import { CurrentUserContext } from "../../context/CurrentUserContext";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import "./App.css";

import Header from "../Header/Header.js";
import Main from "../Main/Main.js";
import Footer from "../Footer/Footer.js";
import Movies from "../Movies/Movies.js";
import Login from "../Login/Login.js";
import Register from "../Register/Register.js";
import Profile from "../Profile/Profile.js";
import NotFoundPage from "../NotFoundPage/NotFoundPage.js";
import Popup from "../Popup/Popup";
import sucessLogoPath from "../../images/sucesspopup.png";
import failLogoPath from "../../images/failpopup.png";

import apiMovies from "../../utils/MoviesApi";
import apiMain from "../../utils/MainApi";

function App() {
  const history = useHistory();
  const location = useLocation();

  const [isLogin, setIsLoggedIn] = React.useState(false); // Залогинен? //
  const [currentUser, setCurrentUser] = React.useState({}); // Данные по юзеру (объект) //
  const [isPopupOpen, setIsPopupOpen] = React.useState(false); //открыто инфоокно? //
  const [message, setMessage] = React.useState({ iconPath: "", text: "" }); // текст инфоокна //
  const [isLoading, setIsLoading] = React.useState(false); //загрузка //
  const [loadingError, setLoadingError] = React.useState(""); //ошибка загрузки //

  // Стейты для поиска фильмов //
  const [initialMovies, setInitialMovies] = React.useState([]);
  const [savedMovies, setSavedMovies] = React.useState([]);
  const [filterMovies, setFilterMovies] = React.useState([]);
  const [filterSavedMovies, setFilterSavedMovies] = React.useState([]);
  const [query, setQuery] = React.useState("");
  const hasQuery = query.length !== 0;

  ///////////////////////////////////////////////////////////////
  /////////////////    Регистрация и логин    ///////////////////
  ///////////////////////////////////////////////////////////////

  // Выдаем/проверяем токен //
  React.useEffect(() => {
    const token = localStorage.getItem("token");
    const path = location.pathname;
    if (token) {
      apiMain
        .checkToken(token)
        .then((res) => {
          if (res) {
            setIsLoggedIn(true);
            getCurrentUser();
            history.push(path);
          }
        })
        .catch((err) => {
          console.log("Ошибка токена" + err);
          localStorage.removeItem('token')
          history.push("/");
        });
    }
  }, []);

  function handleRegister(name, email, password) {
    apiMain
      .register(name, email, password)
      .then((res) => {
        if (res) {
          handleLogin(email, password);
          setIsPopupOpen(true);
          handlePopupContent({
            iconPath: sucessLogoPath,
            text: "Вы успешно зарегистрировались!",
          });
          setTimeout(closeAllPopups, 2500);
        }
      })
      .catch((err) => {
        if (err.status === 409) {
          setIsPopupOpen(true);
          handlePopupContent({
            iconPath: failLogoPath,
            text: "Такой email уже существует",
          });
        } else {
          setIsPopupOpen(true);
          handlePopupContent({
            iconPath: failLogoPath,
            text: "Что-то пошло не так! Попробуйте ещё раз.",
          });
          setTimeout(closeAllPopups, 2500);
        }
      });
  }

  function handleLogin(email, password) {
    apiMain
      .login(email, password)
      .then((res) => {
        if (res.token) {
          localStorage.setItem("token", res.token);
          setIsLoggedIn(true);
          getCurrentUser();
          history.push("/movies");
        }
      })
      .catch((err) => {
        if (err.status === 400) {
          setIsPopupOpen(true);
          handlePopupContent({
            iconPath: failLogoPath,
            text: "Неверный email или пароль",
          });
          setTimeout(closeAllPopups, 2500);
        } else {
          setIsPopupOpen(true);
          handlePopupContent({
            iconPath: failLogoPath,
            text: "Что-то пошло не так!",
          });
          setTimeout(closeAllPopups, 2500);
        }
      });
  }

  ///////////////////////////////////////////////////////////////
  //////////////    Получаем данные с сервера    ////////////////
  ///////////////////////////////////////////////////////////////

  function getCurrentUser() {
    const token = localStorage.getItem("token");
    apiMain
      .getCurrentUser(token)
      .then((res) => {
        if (res) {
          setCurrentUser(res);
          localStorage.setItem("currentUser", JSON.stringify(res));
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function getInitialMovies() {
    apiMovies
      .getAllMovies()
      .then((data) => {
        const initialArray = data.map((item) => {
          const imageURL = item.image ? item.image.url : "";
          return {
            ...item,
            image: `https://api.nomoreparties.co${imageURL}`,
            trailer: item.trailerLink,
          };
        });

        localStorage.setItem("initialMovies", JSON.stringify(initialArray));
        setInitialMovies(initialArray);
      })
      .catch(() => {
        localStorage.removeItem("initialMovies");
        setLoadingError(
          "Проблема с соединением или сервер недоступен. Пожалуйста, попробуйте ещё раз"
        );
      });
  }

  function getSavedMovies() {
    apiMain
      .getMovies()
      .then((data) => {
        const savedArray = data.map((item) => {
          return { ...item, id: item.movieId };
        });
        localStorage.setItem("savedMovies", JSON.stringify(savedArray));
        setSavedMovies(savedArray);
      })
      .catch(() => {
        localStorage.removeItem("savedMovies");
        setLoadingError(
          "Проблема с соединением или сервер недоступен. Пожалуйста, попробуйте ещё раз"
        );
      });
  }

  ///////////////////////////////////////////////////////////////
  ///////////////////////    Хэндлеры    ////////////////////////
  ///////////////////////////////////////////////////////////////

  // Выход //
  function handleLogout() {
    setIsLoggedIn(false);
    localStorage.removeItem("token");
    localStorage.removeItem("initialMovies");
    localStorage.removeItem("savedMovies");
    setInitialMovies([]);
    setSavedMovies([]);
    setFilterMovies([]);
    setFilterSavedMovies([]);
    history.push("/");
  }

  // Обновление данных пользователя //
  function handleEditProfile(data) {
    apiMain
      .editProfile(data)
      .then((profile) => {
        setCurrentUser(profile);
        setIsPopupOpen(true);
        handlePopupContent({
          iconPath: sucessLogoPath,
          text: "Информация обновлена",
        });
        setTimeout(history.push, 3000, "/profile");
        setTimeout(closeAllPopups, 2500);
      })
      .catch((err) => {
        if (err.status === 409) {
          handlePopupContent({
            iconPath: failLogoPath,
            text: "Такой email уже зарегистрирован",
          });
        } else {
          handlePopupContent({
            iconPath: failLogoPath,
            text: "Что-то пошло не так!",
          });
        }
        setIsPopupOpen(true);
        setTimeout(closeAllPopups, 2500);
      });
  }

  // Наполняем попап (картинка/текст) //
  const handlePopupContent = ({ iconPath, text }) => {
    setMessage({ iconPath: iconPath, text: text });
  };

  // Закрытие всех попапов //
  function closeAllPopups() {
    setIsPopupOpen(false);
  }

  ///////////////////////////////////////////////////////////////////////////////////////////

  React.useEffect(() => {
    const initial = JSON.parse(localStorage.getItem("initialMovies"));
    if (initial) {
      setInitialMovies(initial);
    } else {
      getInitialMovies();
    }

    const saved = JSON.parse(localStorage.getItem("savedMovies"));
    if (saved) {
      setSavedMovies(saved);
    } else {
      getSavedMovies();
    }
  }, []);

  React.useEffect(() => {
    if (isLogin) {
      getInitialMovies();
      getSavedMovies();
    }
  }, [isLogin]);

  function isSavedMovie(movie) {
    return savedMovies.some((item) => item.id === movie.id);
  }

  function filter(data, query) {
    if (query) {
      const regex = new RegExp(query, "gi");
      const filterData = data.filter((item) => {
        return regex.test(item.nameRU) || regex.test(item.nameEN);
      });
      if (filterData.length === 0) {
        setLoadingError("Ничего не найдено");
      } else {
        setLoadingError("");
      }
      return filterData;
    }
    return [];
  }

  function onSubmitSearch(query) {
    setIsLoading(true);
    setTimeout(() => {
      setQuery(query);
      setFilterMovies(filter(initialMovies, query));
      setIsLoading(false);
    }, 500);
  }
  function onSubmitSearchSaved(query) {
    setIsLoading(true);
    setTimeout(() => {
      setQuery(query);
      setFilterSavedMovies(filter(savedMovies, query));
      setIsLoading(false);
    }, 500);
  }

  // В избранном //
  function onBookmarkClick(movie, isMarked) {
    if (isMarked) {
      addMovie(movie);
    } else {
      deleteMovie(movie);
    }
  }

  // Удаление из избранных //
  function deleteMovie(movie) {
    const movieId = savedMovies.find((item) => item.id === movie.id)._id;
    console.log(movieId);
    apiMain
      .deleteMovies(movieId)
      .then(() => {
        setSavedMovies(savedMovies.filter(
          (item) => item._id !== movieId
        ));
      })
      .catch(() => {
        setIsPopupOpen(true);
        handlePopupContent({
          iconPath: failLogoPath,
          text: "На сервере произошла ошибка",
        });
        setTimeout(closeAllPopups, 2500);
      });
  }

  // Добавить в избранные //
  function addMovie(movie) {
    apiMain
      .createMovie(movie)
      .then((res) => {
        setSavedMovies([...savedMovies, { ...res, id: res.movieId }]);
      })
      .catch(() => {
        setIsPopupOpen(true);
        handlePopupContent({
          iconPath: failLogoPath,
          text: "На сервере произошла ошибка",
        });
        setTimeout(closeAllPopups, 2500);
      });
  }

  React.useEffect(() => {
    setFilterSavedMovies(filter(savedMovies, query));
    localStorage.setItem("savedMovies", JSON.stringify(savedMovies));
  }, [savedMovies]);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <div className="page__content">
          <Switch>

            <Route exact path="/">
              <Header isLogin={isLogin} />
              <Main />
              <Footer />
            </Route>
            <Route exact path="/">
              {isLogin ? <Redirect to="/" /> : <Redirect to="/sign-in" />}
            </Route>

            <ProtectedRoute
              path="/movies"
              component={Movies}
              isLogin={isLogin}
              savedMovies={false}
              movies={hasQuery ? filterMovies : initialMovies}
              isLoading={isLoading}
              loadingError={loadingError}
              isSavedMovie={isSavedMovie}
              onSubmitSearch={onSubmitSearch}
              onBookmarkClick={onBookmarkClick}
            />
            <ProtectedRoute
              path="/saved-movies"
              component={Movies}
              isLogin={isLogin}
              savedMovies={true}
              isLoading={isLoading}
              loadingError={loadingError}
              movies={hasQuery ? filterSavedMovies : savedMovies}
              onSubmitSearch={onSubmitSearchSaved}
              onBookmarkClick={onBookmarkClick}
              isSavedMovie={isSavedMovie}
            />
            <ProtectedRoute
              path="/profile"
              component={Profile}
              isLogin={isLogin}
              handleLogout={handleLogout}
              handleEditProfile={handleEditProfile}
            />

            <Route exact path="/signup" >
              {isLogin ? <Redirect to="/" /> :
                <Register handleRegister={handleRegister}
                />}
            </Route>
            <Route exact path="/signin" >
              {isLogin ? <Redirect to="/" /> :
                <Login handleLogin={handleLogin}
                />}
            </Route>

            <Route path="*">
              <NotFoundPage />
            </Route>

          </Switch>
          <Popup
            isOpen={isPopupOpen}
            onClose={closeAllPopups}
            message={message}
          />
        </div>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
