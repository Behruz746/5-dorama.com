import { NavLink } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useStateContext } from "../context/ContextProvider";
import { headerSliderList } from "../data/data";
import { v4 as uuidv4 } from "uuid";

function HeaderSlider({ pNone }) {
  const { isToggle } = useStateContext();

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="header__slider__section  w-full">
      <div
        className="container Header__slider__container"
        style={{ padding: `${pNone}` }}
      >
        <Carousel
          infinite
          swipeable={true}
          showDots={true}
          arrows={isToggle ? true : false}
          renderButtonGroupOutside={["tablet", "mobile"]}
          responsive={responsive}
          containerClass="Header__slider__container"
          dotListClass="custom__list"
          itemClass="carousel__dot-list"
          autoPlay={true}
          autoPlaySpeed={8000}
        >
          {headerSliderList.map((item) => (
            <div className="slider__card" key={uuidv4()}>
              <NavLink className="slider__link" to={item.pageLink}>
                <picture>
                  <source srcSet={item.desktopImg} media="(min-width: 550px)" />
                  <img
                    src={item.mobileImg}
                    className="slider__card-bk"
                    loading="lazy"
                    width="100%"
                    alt="image"
                  />
                </picture>
              </NavLink>
            </div>
          ))}
        </Carousel>

        <div className="slider__category">
          <div className="slider__category__column">
            <NavLink to="/dramas/comedy">
              <img
                src="./images/png/category_img02.webp"
                alt="category image"
              />
            </NavLink>
            <NavLink to="/movies/horror">
              <img
                src="./images/png/category_img00.webp"
                alt="category image"
              />
            </NavLink>
          </div>
          <div className="slider__category__row">
            <NavLink to="/dramas/drama">
              <img
                src="./images/png/category_img01.webp"
                alt="category image"
              />
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeaderSlider;
