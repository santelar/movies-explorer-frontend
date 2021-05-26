<div className="header__hamburger-menu">
<input id="menu__toggle" type="checkbox" />
<label className="menu__btn" htmlFor="menu__toggle">
  <span></span>
</label>
<ul className="menu__box">
  <li>
    <Link to="/" className="menu__item">
      Главная
  </Link>
  </li>
  <li>
    <Link to="/movies" className="menu__item">
      Фильмы{" "}
    </Link>
  </li>
  <li>
    <Link to="/saved-movies" className="menu__item">
      {" "}
    Сохраненные фильмы{" "}
    </Link>
  </li>
  <li>
    <div className="menu__container">
      <Link to="/profile" className="menu__link">
        Аккаунт
    </Link>
      <Link to="/profile" className="header__link">
        <img src={account} alt="иконка" className="header__icon" />
      </Link>
    </div>
  </li>
</ul>
</div>
