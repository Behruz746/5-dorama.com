import { NavLink } from "react-router-dom";
import { useContext, useEffect, useRef } from "react";

import "./styles.scss";
import AppContext from "../../AppContext";
import Search from "../Search/Search";

function Header() {
  const { isToggle, setIsToggle, searchvalue, setIsUrl, setToggleSeach } =
    useContext(AppContext);

  const Svg = () => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_87_32)">
        <path
          d="M4 18H20C20.55 18 21 17.55 21 17C21 16.45 20.55 16 20 16H4C3.45 16 3 16.45 3 17C3 17.55 3.45 18 4 18ZM4 13H20C20.55 13 21 12.55 21 12C21 11.45 20.55 11 20 11H4C3.45 11 3 11.45 3 12C3 12.55 3.45 13 4 13ZM3 7C3 7.55 3.45 8 4 8H20C20.55 8 21 7.55 21 7C21 6.45 20.55 6 20 6H4C3.45 6 3 6.45 3 7Z"
          fill="#768C9E"
        />
      </g>
      <defs>
        <clipPath id="clip0_87_32">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );

  const Svg01 = () => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Search" clipPath="url(#clip0_87_40)">
        <path
          id="Vector"
          d="M15.5 14H14.71L14.43 13.73C15.41 12.59 16 11.11 16 9.5C16 5.91 13.09 3 9.5 3C5.91 3 3 5.91 3 9.5C3 13.09 5.91 16 9.5 16C11.11 16 12.59 15.41 13.73 14.43L14 14.71V15.5L19 20.49L20.49 19L15.5 14ZM9.5 14C7.01 14 5 11.99 5 9.5C5 7.01 7.01 5 9.5 5C11.99 5 14 7.01 14 9.5C14 11.99 11.99 14 9.5 14Z"
          fill="#768C9E"
        />
      </g>
      <defs>
        <clipPath id="clip0_87_40">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );

  return (
    <header className="App__header">
      <div className="header__box">
        <div className="header__container">
          <div className="header__menu-toggle">
            <button
              type="button"
              className="header__btn"
              onClick={() => setIsToggle(!isToggle)}
            >
              <Svg />
            </button>

            <div className="header__logo">
              <NavLink to="/">
                <img src="./images/svg/web__logo.svg" alt="logo" />
              </NavLink>
            </div>
          </div>

          <div className="header__search sf-pro-display">
            <div className="search__input">
              <input
                id="inputEl"
                type="text"
                placeholder="Введите название дорамы или фильмы"
              />
              <button type="submit" className="btn__submit">
                {/* <img src="./images/svg/search__icon.svg" alt="search icon" /> */}
                <Svg01 />
              </button>
            </div>
            <Search />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
