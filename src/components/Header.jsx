import { NavLink } from "react-router-dom";
import { useState } from "react";
import Search from "./Search";
import SnowAnimtion from "./SnowAnimtion";
import { CloseSvg, SvgSearch, SvgMenu } from "./SvgEl/SvgEl";
import { useStateContext } from "../context/ContextProvider";

function Header() {
  const [toggle, setToggle] = useState(false);

  const {
    isToggle,
    setIsToggle,
    inputToggle,
    setToggleSeach,
    toggleSeach,
    setIsUrl,
  } = useStateContext();

  function toggleOver() {
    const inputVa = document.querySelectorAll(".inputEl");

    document.querySelector("body").style.overflow = "auto";
    setToggleSeach(false);
    setIsUrl(
      "https://kodikapi.com/search?token=465c15438e7799bee14ea8965dc6e845&title="
    );
    inputVa.forEach((item) => {
      item.value = "";
    });
  }

  const handleClick = (toggle) => {
    setToggle(toggle);
    setToggleSeach(toggle);
  };

  return (
    <>
      <div
        className={toggleSeach ? "over--active over" : "over"}
        onClick={() => toggleOver()}
      ></div>
      <header className="App__header">
        <div className="header__box">
          <SnowAnimtion />
          <div
            className={
              toggle ? "header__container--mobile" : "header__container--MAC"
            }
          >
            <div className="header__menu-toggle">
              <div className="header__logo">
                <NavLink to="/">
                  <img
                    // src="../../../public/images/svg/web__logo.svg"
                    src="https://i.imgur.com/Dd2VZXB.png"
                    alt="logo"
                  />
                </NavLink>
              </div>
            </div>

            <div className="header__input-box">
              <div className="input">
                <input
                  className="inputEl"
                  type="text"
                  placeholder="Что Вы ищете?"
                />
                <button
                  type="submit"
                  className="input__btn"
                  onClick={() => handleClick(true)}
                >
                  <SvgSearch />
                </button>
              </div>

              <button
                className="remove__btn"
                onClick={() => handleClick(false)}
              >
                <CloseSvg />
              </button>
            </div>
            <Search />
          </div>

          <div className="header__container">
            <div className="header__menu-toggle">
              <button
                type="button"
                className="header__btn"
                onClick={() => setIsToggle(!isToggle)}
              >
                <SvgMenu />
              </button>

              <div className="header__logo">
                <NavLink to="/">
                  <img src="https://i.imgur.com/Dd2VZXB.png" alt="logo" />
                </NavLink>
              </div>
            </div>

            <div className="header__search sf-pro-display">
              <div
                className={
                  inputToggle ? "search__input--active" : "search__input"
                }
              >
                <input
                  className="inputEl"
                  type="text"
                  placeholder="Введите название дорамы или фильмы"
                />
                <button type="submit" className="btn__submit">
                  <SvgSearch />
                </button>
              </div>
              <Search />
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
