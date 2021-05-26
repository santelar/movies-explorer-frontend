import React from "react";
import { Link } from "react-router-dom";
import mainLogo from "../../images/logo.svg";
import Validation from "../../helpers/Validation";
import Form from "../Form/Form";
import "./Register.css";

function Register({ handleRegister }) {
  const formValidation = Validation();
  const { name, email, password } = formValidation.values;
  const { values, onFocus, handleChange, isFocused, errors } = formValidation;

  const submitHandle = (event) => {
    event.preventDefault();
    handleRegister(name, email, password);
    formValidation.resetForm();
  };

  return (
    <section className="register">
      <div className="register__form">
        <Link to="/">
          <img alt="лого" src={mainLogo} className="login__logo" />
        </Link>
        <p className="register__header">Добро пожаловать!</p>

        <Form
          submitText={{
            buttonText: "Зарегистрироваться",
            promt: "Уже зарегистрированы?",
            route: "/signin",
            linkText: "Войти",
          }}
          submitHandle={submitHandle}
          validation={formValidation}
          formName="register"
          children={
            <>
              <label htmlFor="name">
                <p className="login__label">Имя</p>
              </label>
              <input
                name="name"
                className={`login__input ${errors.name && "login__error"}`}
                type="text"
                required
                value={values.name || ""}
                onFocus={onFocus}
                onChange={handleChange}
                minLength="2"
              />
              <span className="login__error">{isFocused && errors.name}</span>

              <label htmlFor="email">
                <p className="login__label">E-mail</p>
              </label>
              <input
                name="email"
                className={`login__input ${errors.email && "login__error"}`}
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
                className={`login__input ${errors.password && "login__error"}`}
                type="password"
                required
                value={values.password || ""}
                onFocus={onFocus}
                onChange={handleChange}
                minLength="2"
              />
              <span className="login__error">
                {isFocused && errors.password}
              </span>
            </>
          }
        />

      </div>
    </section>
  );
}

export default Register;
