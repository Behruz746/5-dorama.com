import Slider from "react-slick";
import { NavLink } from "react-router-dom";
import { dataSlider } from "../../data/data";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import { useState } from "react";
import "./styles.scss";
import { useEffect } from "react";

function HeaderSlider({ pNone }) {
  const settings = {
    className: "slider variable-width",
    dots: false,
    infinite: true,
    speed: 1200,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: true,
    variableWidth: false,
    // adaptiveHeight: true,
    arrows: true,
    // arrows: true,
    // autoplay: true,
    // autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 450,
        settings: {
          arrows: false,
          dots: true,
        },
      },
    ],
  };

  const [sliderData, setSliderData] = useState([]);
  const [ApiUrl, setApiUrl] = useState(" ");

  return (
    <section className="HeaderSlider  w-full">
      <div className="container" style={{ padding: `${pNone}` }}>
        <Slider {...settings}>
          <div className="slider__card" key={uuidv4()}>
            <NavLink className="slider__link" to="/">
              <img
                className="slider__card-bk"
                src="https://i.imgur.com/ZwC7BFW.png"
                alt="image"
              />
              <img
                className="slider__card-bk d-none"
                src="https://i.imgur.com/uYX0agI.png"
                alt="image"
              />
            </NavLink>
          </div>
          <div className="slider__card" key={uuidv4()}>
            <NavLink className="slider__link" to="/">
              <img
                className="slider__card-bk"
                src="https://i.imgur.com/ae0bfHc.png"
                alt="image"
              />
              <img
                className="slider__card-bk d-none"
                src="https://i.imgur.com/uYX0agI.png"
                alt="image"
              />
            </NavLink>
          </div>
          <div className="slider__card" key={uuidv4()}>
            <NavLink className="slider__link" to="/">
              <img
                className="slider__card-bk"
                src="https://i.imgur.com/ddqKEH0.png"
                alt="image"
              />
              <img
                className="slider__card-bk d-none"
                src="https://i.imgur.com/uYX0agI.png"
                alt="image"
              />
            </NavLink>
          </div>
          <div className="slider__card" key={uuidv4()}>
            <NavLink className="slider__link" to="/">
              <img
                className="slider__card-bk"
                src="https://i.imgur.com/UdwKJgU.png"
                alt="image"
              />
              <img
                className="slider__card-bk d-none"
                src="https://i.imgur.com/uYX0agI.png"
                alt="image"
              />
            </NavLink>
          </div>
        </Slider>
      </div>
    </section>
  );
}

export default HeaderSlider;
