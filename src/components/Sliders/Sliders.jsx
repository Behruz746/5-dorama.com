import React from "react";
import Slider from "react-slick";
import { NavLink } from "react-router-dom";

// Compoenets
import Cards from "../Cards/Cards";

import "./styles.scss";

function Sliders() {
  const settings = {
    className: "slider variable-width",
    dots: false,
    infinite: true,
    centerMode: false,
    speed: 1300,
    slidesToShow: 3,
    slidesToScroll: 3,
    variableWidth: true,
  };

  return (
    <section className="Home__Sliders w-full">
      <div className="container">
        <div className="Sliders__container">
          <div className="Slider__cards">
            <div className="Slider__navigation">
              <NavLink to="*" className="navigation__title">
                <h1 className="title">Популярные сейчас</h1>
                <img src="./images/svg/arrow__icon.svg" alt="arrow icon" />
              </NavLink>
            </div>
            <Slider {...settings}>
              <Cards />
              <Cards />
              <Cards />
              <Cards />
              <Cards />
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Sliders;
