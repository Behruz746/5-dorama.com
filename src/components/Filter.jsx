import React, { useState, useEffect, useRef } from "react";
import { SvgFilter, SvgFilterCheck, SvgSearch, SvgClose } from "./SvgEl/SvgEl";
import { useStateContext } from "../context/ContextProvider";
import { dropCotryList } from "../data/data";

function Filter() {
  const inputVal = useRef("");
  const [isInputVal, setIsInputVal] = useState("");
  const [voiceToggle, setVoiceToggle] = useState(false);
  const [genreToggle, setGenreToggle] = useState(false);
  const [countryToggle, setCountryToggle] = useState(false);
  const [yearToggle, setYearToggle] = useState(false);
  const [sortingToggle, setSortingToggle] = useState(false);

  useEffect(() => {
    inputVal.current = isInputVal;
    if (genreToggle === false) {
      setIsInputVal("");
    }
  }, [isInputVal, genreToggle]);

  function filterToggle(filterbtn) {
    setVoiceToggle(filterbtn === 0 ? (prev) => !prev : false);
    setGenreToggle(filterbtn === 1 ? (prev) => !prev : false);
    setCountryToggle(filterbtn === 2 ? (prev) => !prev : false);
    setYearToggle(filterbtn === 3 ? (prev) => !prev : false);
    setSortingToggle(filterbtn === 4 ? (prev) => !prev : false);
  }

  useEffect(() => {
    const dropLiEl = document.querySelectorAll(
      ".filter__dropDown .drop__language"
    );
    const dropCatigoryEl = document.querySelectorAll(
      ".filter__dropDown .drop__catigory"
    );

    function checkDropEl(index, element) {
      for (let i = 0; i < element.length; i++) {
        if (index === i) {
          element[i].classList.add("drop__item--active");
          console.log(element[i].textContent);
        } else {
          element[i].classList.remove("drop__item--active");
        }
      }
    }

    dropLiEl.forEach((item, index) =>
      item.addEventListener("click", () => checkDropEl(index, dropLiEl))
    );

    dropCatigoryEl.forEach((item, index) =>
      item.addEventListener("click", () => checkDropEl(index, dropCatigoryEl))
    );
  }, [isInputVal]);

  return (
    <div className="filter w-full">
      <div className="container">
        <div className="filter__container">
          <h1 className="filter__title">Фильтровать фильм</h1>
          <div className="filter__form">
            <div className="filter__droper">
              <div className="filter__input" onClick={() => filterToggle(0)}>
                <h1>Яык озвучки</h1>
                <SvgFilter
                  transform={voiceToggle ? "rotate(0deg)" : "rotate(180deg)"}
                />
              </div>
              <ul
                className={`filter__dropDown ${
                  voiceToggle ? "drop--active" : "drop--none"
                }`}
              >
                <li className="drop__language drop__item drop__item--active">
                  <p>Русский</p>
                  <SvgFilterCheck />
                </li>
                <li className="drop__language drop__item">
                  <p>Английский</p>
                  <SvgFilterCheck />
                </li>
                <li className="drop__language drop__item">
                  <p>Узбекский</p>
                  <SvgFilterCheck />
                </li>
              </ul>
            </div>
            <div className="filter__droper">
              <div
                className="filter__input input"
                onClick={() => filterToggle(1)}
              >
                <h1>Жанр</h1>
                <SvgFilter
                  transform={genreToggle ? "rotate(0deg)" : "rotate(180deg)"}
                />
              </div>
              <ul
                className={`filter__dropDown ${
                  genreToggle ? "drop--active" : "drop--none"
                }`}
              >
                <li className="drop__search__input">
                  <input
                    type="text"
                    placeholder="Поиск"
                    onChange={(e) => setIsInputVal(e.target.value)}
                    value={isInputVal}
                    ref={inputVal}
                  />
                  {isInputVal ? (
                    <button
                      type="reset"
                      className="drop__search__btn"
                      onClick={() => {
                        setIsInputVal((prev) => (prev = ""));
                      }}
                    >
                      <SvgClose />
                    </button>
                  ) : (
                    <button type="button" className="drop__search__btn">
                      <SvgSearch />
                    </button>
                  )}
                </li>

                {dropCotryList
                  .filter((item) =>
                    item.text
                      .charAt()
                      .toLowerCase()
                      .includes(isInputVal.charAt().toLowerCase())
                  )
                  .map((filterItem, index) => (
                    <li
                      className={`drop__item drop__catigory ${
                        filterItem.active ? "drop__item--active" : ""
                      }`}
                      key={index}
                    >
                      {filterItem.text} <SvgFilterCheck />
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Filter;
