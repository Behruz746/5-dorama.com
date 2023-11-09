import React, { useEffect, useState, useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import Slider from "react-slick";
import { NavLink } from "react-router-dom";
import axios from "axios";

// Compoenets
import Cards from "../Cards/Cards";
import AppContext from "../../AppContext";

import "./styles.scss";

function Sliders({ url, title, id }) {
  const { setIsLoad } = useContext(AppContext);

  const [dataAnime, setDataAnime] = useState([]);
  const [dataNextPage, setDataNextPage] = useState([]);

  const [isUrl, setIsUrl] = useState(url);

  useEffect(() => {
    const fetctAnime = async () => {
      try {
        setIsLoad(false);
        const data = await axios.get(isUrl);
        setDataAnime(data.data.results);
        setDataNextPage(data.data.next_page);
        setIsLoad(true);
      } catch (error) {
        console.log(error);
      }
    };

    fetctAnime();
  }, [isUrl]);

  const settings = {
    className: "slider variable-width",
    dots: false,
    infinite: false,
    centerMode: false,
    speed: 700,
    slidesToShow: 4,
    slidesToScroll: 4,
    pauseOnHover: true,
    variableWidth: true,
    arrows: true,
    // autoplay: true,
    // autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1245,
        settings: {
          speed: 600,
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 1039,
        settings: {
          speed: 500,
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 615,
        settings: {
          speed: 400,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const Svg = () => (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="arrow_forward_ios_black_24dp 2" clipPath="url(#clip0_302_1546)">
        <path
          id="Vector"
          d="M9.84 28.0133C10.4933 28.6666 11.5467 28.6666 12.2 28.0133L23.28 16.9333C23.8 16.4133 23.8 15.5733 23.28 15.0533L12.2 3.97328C11.5467 3.31994 10.4933 3.31994 9.84 3.97328C9.18667 4.62661 9.18667 5.67994 9.84 6.33328L19.4933 15.9999L9.82667 25.6666C9.18667 26.3066 9.18667 27.3733 9.84 28.0133Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_302_1546">
          <rect width="32" height="32" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );

  return ( 
    <section className="Home__Sliders w-full sliderId" id={id}>
      <div className="container">
        <div className="Sliders__container">
          <div className="Slider__cards">
            <div className="Slider__navigation">
              <NavLink to="/" className="navigation__title" >
                <h1 className="title">{title}</h1>
                <Svg />
              </NavLink>
            </div>
            <Slider {...settings}>
              {dataAnime.map((data) => (
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
