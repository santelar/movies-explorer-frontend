import React from "react";
import "./Login.css";
import mainLogo from "../../images/logo.svg";
import { Link } from "react-router-dom";
import Validation from "../../helpers/Validation";
import Form from "../Form/Form";

function Login({ handleLogin }) {

  const formValidation = Validation();
  const { email, password } = formValidation.values;
  const { values, onFocus, handleChange, isFocused, errors } = formValidation;


  const submitHandle = (event) => {
    event.preventDefault();
    handleLogin(email, password);
    formValidation.resetForm();
  }

  return (
    <section className="login">
      <div className="login__form">
        <Link to="/">
          <img alt="лого" src={mainLogo} className="login__logo" /></Link>
        <p className="login__header">Рады видеть!</p>

        <Form submitText={{
          buttonText: "Войти",
          promt: "Ещё не зарегистрированы?",
          route: "/signup",
          linkText: "Регистрация",
        }}
          submitHandle={submitHandle}
          validation={formValidation}
          formName="login"
          children={
            <>
              <label htmlFor="email">
                <p className="login__label">E-mail</p>
              </label>
              <input
                name="email"
                className={`login__input ${errors.email && 'login__error'}`}
                type="email"
                required
                value={values.email || ""}
                onFocus={onFocus}
                onChange={handleChange}
                minLength="2"
              />
              <span className="login__error">{isFocused && errors.email}</span>

              <label htmlFor="password">
                <p className="login__label">Пароль</p>
              </label>
              <input
                name="password"
                className={`login__input login__input_height ${errors.password && 'login__error'}`}
                type="password"
                required
                value={values.password || ''}
                onFocus={onFocus}
                onChange={handleChange}
                minLength="2"
              />
              <span className="login__error">{isFocused && errors.password}</span>
            </>
          }
        />
      </div>
    </section>
  );
}

export default Login;
