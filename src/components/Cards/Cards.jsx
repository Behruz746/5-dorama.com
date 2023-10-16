import { NavLink } from "react-router-dom";

import "./styles.scss";

import { useContext, useEffect } from "react";
import AppContext from "../../AppContext";

import { testCard } from "../../data/data";

function Cards(data) {
  const { setIsVideoLink, isVideoLink, dataList, dataLength } =
    useContext(AppContext);

  const Svg = () => (
    <svg
      className="card__icon"
      width="14"
      height="13"
      viewBox="0 0 14 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Group">
        <path
          id="Vector"
          d="M6.99999 10.9524L10.1125 12.8349C10.6825 13.1799 11.38 12.6699 11.23 12.0249L10.405 8.48495L13.1575 6.09995C13.66 5.66495 13.39 4.83995 12.73 4.78745L9.10749 4.47995L7.68999 1.13495C7.43499 0.527446 6.56499 0.527446 6.30999 1.13495L4.89249 4.47245L1.26999 4.77995C0.609994 4.83245 0.339993 5.65745 0.842493 6.09245L3.59499 8.47745L2.76999 12.0174C2.61999 12.6624 3.31749 13.1724 3.88749 12.8274L6.99999 10.9524Z"
          fill="white"
        />
      </g>
    </svg>
  );

  useEffect(() => {
    const cardEl = document.querySelector(".Card");
    const slickTrack = document.querySelector(".slick-track");
    const slickSlide = document.querySelector(".slick-slide");

    // if (!data.material_data) {
    //   cardEl.remove();
    //   slickSlide.style.display = "none";

    //   console.log(dataLength);

    //   // // slickTrack.remove();
    //   // slickSlide.forEach((item, index) => {
    //   //   // for (let i = 0; i < dataLength; i++) {
    //   //   //   console.log(i);

    //   //     if (index === dataLength) {
    //   //       item.style.display = "none";
    //   //     }
    //   //   // }
    //   // });
    // }
  }, []);

  return (
    <>
      {data.material_data ? (
        <div className="Card">
          <NavLink to="video" onClick={() => setIsVideoLink(data.link)}>
            <div className="card__img">
              <div className="card__reting">
                <Svg />
                <h4>
                  {data.material_data.mydramalist_rating
                    ? data.material_data.mydramalist_rating
                    : 5.6}
                </h4>
              </div>
              <img
                className="card__image"
                src={
                  data.material_data.poster_url
                    ? data.material_data.poster_url
                    : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPLxrenfHPaNrSMVtKYmvb19BOBDi2a5Wi3TeTWajnfcf2l_Je8SVUAsUZoU9VEWFVrsg&usqp=CAU"
                }
                alt="card image"
              />
            </div>
            <div className="card__content">
              <h1 className="card__title">{data.title}</h1>
              <p>{data.sort}</p>
            </div>
          </NavLink>
        </div>
      ) : (
        <div className="Card" style={{ display: "none" }}>null</div>
      )}
    </>
  );
}

export default Cards;
