import { useContext, useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

// Data
import { dataNav, famousData, dropData } from "../../data/data";

// SvgEl
import { SvgEl, SvgDorama, SvgTreler, SvgMoveis, SvgThunder, SvgDocument } from "../SvgEl/SvgEl";
 
// AppContext
import AppContext from "../../AppContext";
import "./styles.scss";

function Menu() {
  const { isToggle, setIsToggle } = useContext(AppContext);

  const [isArrorToggle00, setIsArrowToggle00] = useState(false);
  const [isArrorToggle01, setIsArrowToggle01] = useState(false);

  const ListDrop = () => (
    <div
      className={
        !isArrorToggle00 ? "drop__list" : "drop__list drop__list--active"
      }
    >
      {dropData.map((data) => (
        <div key={uuidv4()}>
          <NavLink to="*" className="d-flex drop__item">
            <img src="../public//images/svg/play__icon.svg" alt="Icon" />
            <h1>{data.name}</h1>
          </NavLink>
        </div>
      ))}
    </div>
  );

  const ListMovies = () => (
    <div
      className={
        !isArrorToggle01 ? "drop__list" : "drop__list drop__list--active"
      }
    >
      <div>
        <NavLink to="*" className="d-flex drop__item">
          <img src="../public//images/svg/play__icon.svg" alt="Icon" />
          <h1>Movie is name in API</h1>
        </NavLink>
      </div>
    </div>
  );

  return (
    <div className={isToggle ? "App__nav" : "App__nav App__nav--active"}>
      <nav className="nav__list">
        <div className="list__items">
          <div className="menu__container">
            <div
              className={
                isToggle ? "list__item" : "list__item list__item--active"
              }
            >
              <NavLink
                to="/"
                className="list__link"
                onClick={() => setIsToggle(true)}
              >
                <div
                  className={
                    isToggle ? "list__box" : "list__box list__box--active"
                  }
                >
                  <SvgEl />
                  <h3>Главная</h3>
                </div>
              </NavLink>
            </div>
            <div
              className={
                isToggle ? "list__item" : "list__item list__item--active"
              }
            >
              <NavLink
                to="shorts"
                className="list__link"
                onClick={() => setIsToggle(true)}
              > 
                <div
                  className={
                    isToggle ? "list__box" : "list__box list__box--active"
                  }
                >
                  <SvgTreler />
                  <h3>Трейлер</h3>
                </div>
              </NavLink>
            </div>
            <div
              className={
                isToggle ? "list__item" : "list__item list__item--active"
              }
            >
              <NavLink
                to="dramas"
                className="list__link"
                id="borderActive"
                onClick={() => setIsToggle(true)}
              >
                <div
                  className={
                    isToggle ? "list__box" : "list__box list__box--active"
                  }
                >
                  <SvgDorama />
                  <h3>Дорамы</h3>
                </div>
              </NavLink>

              <div
                className="image__box"
                onClick={() => {
                  setIsArrowToggle00(!isArrorToggle00);
                  console.log(isArrorToggle00);
                }}
              >
                <img
                  className={
                    !isArrorToggle00 ? "toggle__arrow" : "toggle__arrow--actve"
                  }
                  src="https://i.imgur.com/xFS7ol0.png"
                  alt="toggle icon"
                />
              </div>
            </div>
            <ListDrop />
            <div
              className={
                isToggle ? "list__item" : "list__item list__item--active"
              }
            >
              <NavLink
                to="filems"
                className="list__link"
                id="borderActive"
                onClick={() => setIsToggle(true)}
              >
                <div
                  className={
                    isToggle ? "list__box" : "list__box list__box--active"
                  }
                >
                  <SvgMoveis />
                  <h3>Фильмы</h3>
                </div>
              </NavLink>
              <div
                className="image__box"
                onClick={() => {
                  setIsArrowToggle01(!isArrorToggle01);
                  console.log(isArrorToggle01);
                }}
              >
                <img
                  className={
                    !isArrorToggle01 ? "toggle__arrow" : "toggle__arrow--actve"
                  }
                  src="https://i.imgur.com/xFS7ol0.png"
                  alt="toggle icon"
                />
              </div>
            </div>
            <ListMovies />
          </div>
        </div>

        <div
          className={isToggle ? "nav__line" : "nav__line nav__line--active"}
        ></div>
        <div
          className={
            isToggle
              ? "famous__filems"
              : "famous__filems famous__filems--active"
          }
        >
          {famousData.map(({ text, link, icon, target, color }) => (
            <NavLink
              target={target ? "_blank" : ""}
              to={link}
              className={
                isToggle ? "list__item" : "list__link list__link--active"
              }
              key={uuidv4()}
              onClick={() => setIsToggle(true)}
            >
              {icon ? <img src={icon} alt="item icon" /> : <SvgThunder />}

              <h3 style={{ color: `${color}`}}>{text}</h3>
            </NavLink>
          ))}
        </div>
      </nav>
    </div>
  );
}

export default Menu;
