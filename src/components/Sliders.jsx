import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import { NavLink } from "react-router-dom";
import ContentLoader from "react-content-loader";
import { useMediaQuery } from "react-responsive";
import axios from "axios";
import Cards from "./Cards";
import { v4 as uuidv4 } from "uuid";

function Sliders({ url, title, id, linkPage }) {
  const [dataCard, setDataCard] = useState([]);
  const [dataNextPage, setDataNextPage] = useState([]);
  const [isUrl, setIsUrl] = useState(url);
  const [isLoad, setIsLoad] = useState(true);

  const LoadAimetion = (props) => {
    const isMobile = useMediaQuery({ maxWidth: 550 });

    const titleY = isMobile ? 30 : 20;
    const titleWidth = isMobile ? 150 : 250;
    const titleHeight = isMobile ? 10 : 20;
    const width = isMobile ? 550 : 2000;
    const height = isMobile ? 274 : 325;
    const cardWidth = isMobile ? 123 : 164;
    const cardHeight = isMobile ? 204 : 266;
    const cardGap = isMobile ? 10 : 20;

    return (
      <ContentLoader
        speed={2}
        width={width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        backgroundColor="#17212B"
        foregroundColor="#768C9E"
        {...props}
      >
        <rect x="104" y="277" rx="0" ry="0" width="0" height="2" />
        <rect
          x="0"
          y={titleY}
          rx="4"
          ry="4"
          width={titleWidth}
          height={titleHeight}
        />
        <rect
          x={cardWidth * 0 + 0}
          y="57"
          rx="4"
          ry="4"
          width={cardWidth}
          height={cardHeight}
        />
        <rect
          x={cardWidth * 1 + cardGap}
          y="57"
          rx="4"
          ry="4"
          width={cardWidth}
          height={cardHeight}
        />
        <rect
          x={cardWidth * 2.1 + cardGap}
          y="57"
          rx="4"
          ry="4"
          width={cardWidth}
          height={cardHeight}
        />
        <rect
          x={cardWidth * 3.2 + cardGap}
          y="57"
          rx="4"
          ry="4"
          width={cardWidth}
          height={cardHeight}
        />
        <rect
          x={cardWidth * 4.3 + cardGap}
          y="57"
          rx="4"
          ry="4"
          width={cardWidth}
          height={cardHeight}
        />
        <rect
          x={cardWidth * 5.4 + cardGap}
          y="57"
          rx="4"
          ry="4"
          width={cardWidth}
          height={cardHeight}
        />
        <rect
          x={cardWidth * 6.5 + cardGap}
          y="57"
          rx="4"
          ry="4"
          width={cardWidth}
          height={cardHeight}
        />
        <rect
          x={cardWidth * 7.6 + cardGap}
          y="57"
          rx="4"
          l="0"
          width="70"
          height={cardHeight}
        />
        <rect x="1060" y="0" rx="4" ry="4" width="42" height="42" />
        <rect x="1115" y="0" rx="4" ry="4" width="42" height="42" />
      </ContentLoader>
    );
  };

  useEffect(() => {
    const fetctAnime = async () => {
      try {
        setIsLoad(false);
        const data = await axios.get(isUrl);
        setDataCard(data.data.results);
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
              {isLoad ? (
                <Carousel
                  responsive={responsive}
                  customButtonGroup={<ButtonGroup />}
                  customTransition="all 0.2s ease-in-out"
                  swipeable={true}
                  arrows={!true}
                  showDots={!true}
                  renderButtonGroupOutside={["tablet", "mobile"]}
                  containerClass="Header__slider__container"
                  dotListClass="custom__list"
                  itemClass="carousel__dot-list"
                >
                  {dataCard.map((data) => (
                    <Cards {...data} key={uuidv4()} dataClass="sliderCard" />
                  ))}
                </Carousel>
              ) : (
                <LoadAimetion />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Sliders;
