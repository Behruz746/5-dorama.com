import { NavLink } from "react-router-dom";

import "./styles.scss";

function Cards() {
  return (
    <div className="Card">
      <NavLink to="*">
        <div className="card__img">
          <div className="card__reting">
            <img
              className="card__icon"
              src="./images/svg/star__icon.svg"
              alt="card icon"
            />
            <h4>4,6</h4>
          </div>
          <img className="card__image" src="./images/png/filem__img-00.png" alt="card image" />
        </div>
        <div className="card__content">
          <h1 className="card__title">Худшее из зол</h1>
          <p>Сериал</p>
        </div>
      </NavLink>
    </div>
  );
}

export default Cards;
