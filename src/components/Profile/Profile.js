/* eslint-disable no-mixed-operators */
/* eslint-disable react-hooks/exhaustive-deps */
import { React, useContext, useEffect } from "react";
import "./Profile.css";
import Header from "../Header/Header";
import { CurrentUserContext } from '../../context/CurrentUserContext';
import Validation from "../../helpers/Validation";

function Profile({ isLogin, handleLogout, handleEditProfile }) {

  const currentUser = useContext(CurrentUserContext);
  const formValidation = Validation();
  const { email, name } = formValidation.values;

  useEffect(() => {
    formValidation.setValues({ 'email': currentUser.data.email, 'name': currentUser.data.name });
  }, [currentUser]);

  const submitEditProfile = (event) => {
    event.preventDefault();
    handleEditProfile({ email, name });
    console.log(name, email)
  }

  return (
    <>
      <Header isLogin={isLogin} />
      <div className="profile">
        <form onSubmit={submitEditProfile}
          name="edit-form"
          className="profile__form"
          type="submit"
        >
          <p className="profile__header">
            Привет, {name}!
          </p>

          <div className="profile__row">
            <label className="profile__text" htmlFor="name">
              Имя
            </label>
            <input
              className="profile__text profile__input"
              type='text'
              onChange={formValidation.handleChange}
              value={name || ''}
              required
              minLength='2'
              maxLength='30'
              name="name"
            >
            </input>
          </div>

          <div className="profile__row profile__row_invisible">
            <label htmlFor="email" className="profile__text">
              E-mail
            </label>
            <input
              className="profile__text profile__input"
              type='email'
              onChange={formValidation.handleChange}
              value={email || ''}
              required
              name="email"
            >
            </input>
          </div>
          <p className='profile__form-error'>{formValidation.errors.name || formValidation.errors.email}</p>
          <button className="profile__button" type="submit" disabled={currentUser && (name === currentUser.data.name && email === currentUser.data.email) || !formValidation.isValid}>Редактировать</button>
          <button onClick={handleLogout} className="profile__link">
            Выйти из аккаунта
          </button>
        </form>
      </div>
    </>
  );
}

export default Profile;
