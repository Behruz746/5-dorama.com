import { NavLink } from "react-router-dom";

import "./styles.scss";

import { useContext, useEffect } from "react";
import AppContext from "../../AppContext";

import { testCard } from "../../data/data";

function Cards(data) {
  const { setIsVideoLink, isVideoLink, isData } = useContext(AppContext);
  useEffect(() => {
    const cardAEL = document.querySelectorAll(".Card a");

    cardAEL.forEach((item, index) =>
      item.addEventListener("click", () => {
        for (let i = 0; i < isData.length; i++) {
          if (index === i) {
            setIsVideoLink(data.videoLink);
          }
        }
      })
    );
  }, [isVideoLink]);

  return (
    <div className="Card">
      <NavLink to={data.link}>
        <div className="card__img">
          <div className="card__reting">
            <img
              className="card__icon"
              src="./images/svg/star__icon.svg"
              alt="card icon"
            />
            <h4>{data.rating}</h4>
          </div>
          <img className="card__image" src={data.image} alt="card image" />
        </div>
        <div className="card__content">
          <h1 className="card__title">{data.name}</h1>
          <p>{data.sort}</p>
        </div>
      </NavLink>
    </div>
  );
}

export default Cards;
