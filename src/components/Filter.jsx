import React, { useState, useEffect, useRef } from "react";
import { SvgFilter, SvgFilterCheck, SvgSearch, SvgClose } from "./SvgEl/SvgEl";
import { useStateContext } from "../context/ContextProvider";
import { dropCotryList } from "../data/data";

function Filter({ setIsCheckCountry, isCheckCountry }) {
  const inputVal = useRef("");
  const yearVal = useRef("");
  const [isInputVal, setIsInputVal] = useState("");
  const [isYearVal, setIsYearVal] = useState("");
  const [voiceToggle, setVoiceToggle] = useState(false);
  const [genreToggle, setGenreToggle] = useState(false);
  const [countryToggle, setCountryToggle] = useState(false);
  const [yearToggle, setYearToggle] = useState(false);
  const [sortingToggle, setSortingToggle] = useState(false);
  const years = [];

  useEffect(() => {
    inputVal.current = isInputVal;
    yearVal.current = isYearVal;
  }, [isInputVal, isYearVal]);

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
    const dropCountryEl = document.querySelectorAll(
      ".filter__dropDown .drop__country"
    );
    const dropYearEl = document.querySelectorAll(
      ".filter__dropDown .drop__year"
    );
    const dropFilterEl = document.querySelectorAll(
      ".filter__dropDown .drop__filter"
    );

    function setFilterVoice(index) {
      for (let i = 0; i < dropLiEl.length; i++) {
        if (index === i) {
          dropLiEl[i].classList.add("drop__item--active");
          console.log(dropLiEl[i].textContent);
        } else {
          dropLiEl[i].classList.remove("drop__item--active");
        }
      }
    }

    function setFilterCatigory(index) {
      for (let i = 0; i < dropCatigoryEl.length; i++) {
        if (index === i) {
          dropCatigoryEl[i].classList.add("drop__item--active");
          console.log(dropCatigoryEl[i].textContent);
        } else {
          dropCatigoryEl[i].classList.remove("drop__item--active");
        }
      }
    }

    function setFilterCountry(index) {
      for (let i = 0; i < dropCountryEl.length; i++) {
        if (index === i) {
          dropCountryEl[i].classList.add("drop__item--active");
          setIsCheckCountry(dropCountryEl[i].textContent);
        } else {
          dropCountryEl[i].classList.remove("drop__item--active");
        }
      }
    }

    function setFilterYear(index) {
      for (let i = 0; i < dropYearEl.length; i++) {
        if (index === i) {
          dropYearEl[i].classList.add("drop__item--active");
          console.log(dropYearEl[i].textContent);
        } else {
          dropYearEl[i].classList.remove("drop__item--active");
        }
      }
    }

    function setFilter(index) {
      for (let i = 0; i < dropFilterEl.length; i++) {
        if (index === i) {
          dropFilterEl[i].classList.add("drop__item--active");
          console.log(dropFilterEl[i].textContent);
        } else {
          dropFilterEl[i].classList.remove("drop__item--active");
        }
      }
    }

    dropLiEl.forEach((item, index) =>
      item.addEventListener("click", () => setFilterVoice(index))
    );
    dropCatigoryEl.forEach((item, index) =>
      item.addEventListener("click", () => setFilterCatigory(index))
    );
    dropCountryEl.forEach((item, index) =>
      item.addEventListener("click", () => setFilterCountry(index))
    );
    dropYearEl.forEach((item, index) =>
      item.addEventListener("click", () => setFilterYear(index))
    );
    dropFilterEl.forEach((item, index) =>
      item.addEventListener("click", () => setFilter(index))
    );
  }, [isInputVal, isYearVal, genreToggle, countryToggle]);

  for (let i = 0; i <= 33; i++) {
    years.push(2024 - i);
  }

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
              </ul>
            </div>
            <div className="filter__droper">
              <div
                className="filter__input input"
                onClick={() => filterToggle(1)}
              >
                <div className="filter__input__title">
                  <h1>Жанр</h1>
                  <span className="filter__catigory"></span>
                </div>

                <SvgFilter
                  transform={genreToggle ? "rotate(0deg)" : "rotate(180deg)"}
                />
              </div>
              <div
                className={`filter__dropDown ${
                  genreToggle ? "drop--active" : "drop--none"
                }`}
              >
                <div className="drop__search__input">
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
                </div>
                <ul className="over--scroll">
                  {dropCotryList
                    .filter((item) =>
                      item.text.toLowerCase().includes(isInputVal.toLowerCase())
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

            <div className="filter__droper">
              <div className="filter__input" onClick={() => filterToggle(2)}>
                <div className="filter__input__title">
                  <h1>Страна</h1>
                  {/* {!isCheckCountry ===
                  "Япония,Корея Южная,Китай,Тайвань" ? null : (
                    <span className="filter__catigory">{isCheckCountry}</span>
                  )} */}
                </div>
                <SvgFilter
                  transform={countryToggle ? "rotate(0deg)" : "rotate(180deg)"}
                />
              </div>
              <ul
                className={`filter__dropDown  ${
                  countryToggle ? "drop--active" : "drop--none"
                }`}
              >
                <li className="drop__country drop__item drop__item--active">
                  <p>Все</p>
                  <SvgFilterCheck />
                </li>
                <li className="drop__country drop__item">
                  <p>Корея Южная</p>
                  <SvgFilterCheck />
                </li>
                <li className="drop__country drop__item">
                  <p>Япония</p>
                  <SvgFilterCheck />
                </li>
                <li className="drop__country drop__item">
                  <p>Китай</p>
                  <SvgFilterCheck />
                </li>
                <li className="drop__country drop__item">
                  <p>Тайвань</p>
                  <SvgFilterCheck />
                </li>
              </ul>
            </div>

            <div className="filter__droper">
              <div className="filter__input" onClick={() => filterToggle(3)}>
                <h1>Год</h1>
                <SvgFilter
                  transform={yearToggle ? "rotate(0deg)" : "rotate(180deg)"}
                />
              </div>

              <div
                className={`filter__dropDown over--scroll ${
                  yearToggle ? "drop--active" : "drop--none"
                }`}
              >
                <div className="drop__search__input">
                  <input
                    type="number"
                    inputMode="numeric"
                    placeholder="Поиск"
                    onChange={(e) => setIsYearVal(e.target.value)}
                    value={isYearVal}
                    ref={yearVal}
                  />
                  {isYearVal ? (
                    <button
                      type="reset"
                      className="drop__search__btn"
                      onClick={() => {
                        setIsYearVal((prev) => (prev = ""));
                      }}
                    >
                      <SvgClose />
                    </button>
                  ) : (
                    <button type="button" className="drop__search__btn">
                      <SvgSearch />
                    </button>
                  )}
                </div>

                <ul className="over--scroll">
                  {years
                    .filter((year) => String(year).includes(String(isYearVal)))
                    .map((filterYear) => (
                      <li className="drop__year drop__item" key={filterYear}>
                        <p>{filterYear}</p>
                        <SvgFilterCheck />
                      </li>
                    ))}
                </ul>
              </div>
            </div>

            <div className="filter__droper">
              <div className="filter__input" onClick={() => filterToggle(4)}>
                <h1>Cортировка</h1>
                <SvgFilter
                  transform={sortingToggle ? "rotate(0deg)" : "rotate(180deg)"}
                />
              </div>
              <ul
                className={`filter__dropDown over--scroll ${
                  sortingToggle ? "drop--active" : "drop--none"
                }`}
              >
                <li className="drop__filter drop__item drop__item--active">
                  <p>По дате загрузки</p>
                  <SvgFilterCheck />
                </li>
                <li className="drop__filter drop__item">
                  <p>по рейтингу</p>
                  <SvgFilterCheck />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Filter;
