import Slider from "react-slick";
import { NavLink } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";

function HeaderSlider({ pNone }) {
  const settings = {
    className: "slider variable-width",
    dots: true,
    infinite: true,
    speed: 1200,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: true,
    variableWidth: false,
    autoplay: true,
    autoplaySpeed: 10000,
    // adaptiveHeight: true,
    arrows: true, 
    responsive: [
      {
        breakpoint: 475,
        settings: {
          arrows: false,
        },
      },
    ],
  };

  return (
    <section className="HeaderSlider  w-full">
      <div className="container" style={{ padding: `${pNone}` }}>
        <Slider {...settings}>
          <div className="slider__card" key={uuidv4()}>
            <NavLink className="slider__link" to="/player/video/serial-34080">
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
            <NavLink className="slider__link" to="/player/video/serial-2986">
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
            <NavLink className="slider__link" to="/player/video/serial-38722">
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
            <NavLink className="slider__link" to="/player/video/serial-53497">
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
