import React from "react";
import "./NotFoundPage.css";
import { useHistory, Link } from 'react-router-dom';

function NotFoundPage() {

  const history = useHistory();

  return (
    <div>
      <div className="not-found-page">
        <p className="not-found-page__header"> 404 </p>
        <p className="not-found-page__text"> Страница не найдена</p>
        <Link to={() => history.goBack()} className="not-found-page__link">
          Назад
        </Link>
      </div>
    </div>
  );
}

export default NotFoundPage;
