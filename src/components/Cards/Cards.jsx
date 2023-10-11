import { NavLink } from "react-router-dom";

import "./styles.scss";

function Cards({rating, image, name, sort}) {
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
            <h4>{rating}</h4>
          </div>
          <img className="card__image" src={image} alt="card image" />
        </div> 
        <div className="card__content">
          <h1 className="card__title">{name}</h1>
          <p>{sort}</p>
        </div>
      </NavLink>
    </div>
  );
}

export default Cards;
