import React from 'react';
import { Route, Switch } from 'react-router-dom';
//import ProtectedRoute from './ProtectedRoute';
//import CurrentUserContext from "../contexts/CurrentUserContext";

import './App.css';

import Header from '../Header/Header';
import Main from '../Main/Main';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Movies from '../Movies/Movies';
import Profile from '../Profile/Profile';
import PageNotFound from '../PageNotFound/PageNotFound';
import Footer from '../Footer/Footer';

function App() {




  return (
    <div className="page">
      <Header />
      <Switch>
        <Route path="/signup">
          <Register />
        </Route>
        <Route path="/signin">
          <Login />
        </Route>
        <Route exact path="/">
          <Main />
        </Route>
        <Route path="/movies">
          <Movies />
          </Route>
        <Route path="/saved-movies">
          <Movies />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
        <Route path="*">
          <PageNotFound />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
