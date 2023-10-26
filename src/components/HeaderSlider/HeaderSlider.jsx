import Slider from "react-slick";
import { NavLink } from "react-router-dom";
import { dataSlider } from "../../data/data";
import { v4 as uuidv4 } from "uuid";

import "./styles.scss";

function HeaderSlider({pNone}) {
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
  };

  return (
    <section className="HeaderSlider  w-full">
      <div className="container" style={{padding: `${pNone}`}}>
          <Slider {...settings}>
            {dataSlider.map((data) => (
              <div className="slider__card" key={uuidv4()}>
                <NavLink className="slider__link" to={data.link}>
                  <img
                    className="slider__card-img"
                    src={data.image}
                    alt="background image"
                  />
                </NavLink>
              </div>
            ))}
          </Slider>
      </div>
    </section>
  );
}

export default HeaderSlider;
