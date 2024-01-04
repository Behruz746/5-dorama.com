import React, { useEffect, useState, useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import { NavLink } from "react-router-dom";
import axios from "axios";
import Carousel from "react-multi-carousel";

// Compoenets
import Cards from "./Cards";
import AppContext from "../AppContext";

function Sliders({ url, title, id, linkPage }) {
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

  const responsive = {
    superBigLargeDesktop: {
      breakpoint: { max: 5000, min: 1900 },
      items: 8.2,
      slidesToSlide: 1,
    },
    bigLargeDesktop: {
      breakpoint: { max: 1900, min: 1560 },
      items: 7.2,
      slidesToSlide: 1,
    },
    desktop: {
      breakpoint: { max: 1560, min: 1300 },
      items: 6.2,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1300, min: 500 },
      items: 4.2,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 500, min: 450 },
      items: 3.8,
      slidesToSlide: 3,
    },
    minMobile: {
      breakpoint: { max: 450, min: 420 },
      items: 3.5,
      slidesToSlide: 2,
    },
    superMinMobile: {
      breakpoint: { max: 420, min: 370 },
      items: 3,
      slidesToSlide: 1,
    },
    proMinMobile: {
      breakpoint: { max: 370, min: 310 },
      items: 2.5,
      slidesToSlide: 1,
    },
    proMinMobile: {
      breakpoint: { max: 370, min: 310 },
      items: 2.5,
      slidesToSlide: 1,
    },
    mobile_310px: {
      breakpoint: { max: 310, min: 280 },
      items: 2.3,
      slidesToSlide: 1,
    },
    mobile_280px: {
      breakpoint: { max: 280, min: 260 },
      items: 2.1,
      slidesToSlide: 1,
    },
    mobile_260px: {
      breakpoint: { max: 260, min: 240 },
      items: 1.9,
      slidesToSlide: 1,
    },
    mobile_240px: {
      breakpoint: { max: 240, min: 0 },
      items: 1.7,
      slidesToSlide: 1,
    },
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

  const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
    const {
      carouselState: { currentSlide, totalItems, slidesToShow },
    } = rest;

    const [count, setCount] = useState(0);

    return (
      <div className="carousel-button-group">
        {/* {title && <h1 className="slider__title title">{title}</h1>} */}

        <div className="btns">
          <div className="Slider__navigation">
            <NavLink to={linkPage} className="navigation__title">
              <h1 className="title">{title}</h1>
              <Svg />
            </NavLink>
          </div>
          <div className="slider__showbtn">
            <div className="slider__btn">
              <button
                className={`${
                  currentSlide > 0 ? "active--btn" : "notActive--btn"
                } arrows slick-arrow slick-prev`}
                onClick={() => {
                  setCount(totalItems + currentSlide);
                  previous();
                }}
              ></button>
              <button
                className={`${
                  currentSlide <= count ? "active--btn" : "notActive--btn"
                } arrows slick-arrow slick-next`}
                onClick={() => {
                  setCount(totalItems - slidesToShow - 1);
                  next();
                }}
              ></button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="Home__Sliders w-full sliderId" id={id}>
      <div className="container">
        <div className="sliders__container slider__card">
          <div className="Slider__cards">
            <div className="carousel__card-container">
              <Carousel
                responsive={responsive}
                customButtonGroup={<ButtonGroup />}
                swipeable={true}
                arrows={!true}
                showDots={!true}
                renderButtonGroupOutside={["tablet", "mobile"]}
                containerClass="Header__slider__container"
                dotListClass="custom__list"
                itemClass="carousel__dot-list"
              >
                {dataAnime.map((data) => (
                  <Cards {...data} key={uuidv4()} dataClass="sliderCard" />
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Sliders;
