import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Slider from "react-slick";
import { NavLink } from "react-router-dom";

// Compoenets
import Cards from "../Cards/Cards";

import { testCard } from "../../data/data";

import "./styles.scss";

function Sliders() {
  const settings = {
    className: "slider variable-width",
    dots: false,
    infinite: false,
    centerMode: false,
    speed: 1300,
    slidesToShow: 4,
    slidesToScroll: 3,
    pauseOnHover: true,
    variableWidth: true,
    arrows: true,
    // autoplay: true,
    // autoplaySpeed: 10000,
    responsive: [
      {
        breakpoint: 1008,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const [isTransform, setIsTransform] = useState('translate3d(0px, 0px, 0px)');

  console.log(isTransform);

  useEffect(() => {
    const slickNext = document.querySelector(".slick-next");
    // const slickPrev = document.querySelector('.slick-prev');
    const slickTrack = document.querySelector(".slick-track");

    // if(isTransform === 'transform: translate3d(-563px, 0px, 0px);') {
    //   console.log('Hello');
    // }


    setIsTransform(slickTrack.style.transform);
  }, [isTransform]);

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
              {testCard.map((data) => (
                <Cards {...data} key={uuidv4()} />
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Sliders;
