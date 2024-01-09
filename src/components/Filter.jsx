import React, { useState, useEffect, useRef } from "react";
import {
  SvgFilter,
  SvgFilterCheck,
  SvgSearch,
  SvgClose,
  CloseSvg,
} from "./SvgEl/SvgEl";
import { useStateContext } from "../context/ContextProvider";
import { dropCotryList } from "../data/data";

function Filter({ isFilterData }) {
  const {
    setIsCheckYaer,
    isCheckYear,
    setIsCheckCatigory,
    isCheckCatigory,
    setIsCheckCountry,
    isCheckCountry,
    toggleData,
  } = useStateContext();

  const [isClearToggle, setIsClearToggle] = useState(false);

  useEffect(() => {
    if (isCheckYear || isCheckCatigory || isCheckCountry) {
      setIsClearToggle(true);
    } else {
      setIsClearToggle(false);
    }
  }, [isCheckYear, isCheckCatigory, isCheckCountry]);

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

    function setFilterCatigory(index, element) {
      for (let i = 0; i < element.length; i++) {
        if (index === i) {
          element[i].classList.add("drop__item--active");

          setIsCheckCatigory((prev) => {
            if (element[i].textContent.trim() === "Все") {
              return "комедия,драма,боевик,биография,военный,фантастика,ужасы,криминал,аниме";
            } else {
              return element[i].textContent.trim();
            }
          });

          console.log(
            `https://kodikapi.com/list?token=465c15438e7799bee14ea8965dc6e845&with_episodes=true&with_material_data=true&limit=18&lgbt=false&types=foreign-movie&year=2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,&kinopoisk_rating=5-10&imdb_rating=5-10&drama_genres=${isCheckCatigory}&countries=${isCheckCountry}&translation_id=647,605,674,670,871,794,639,879`
          );

          console.log(dropCatigoryEl[i].textContent);
        } else {
          element[i].classList.remove("drop__item--active");
        }
      }
    }

    function setFilterCountry(index, element) {
      for (let i = 0; i < element.length; i++) {
        if (index === i) {
          element[i].classList.add("drop__item--active");
          setIsCheckCountry((prev) =>
            element[i].textContent === "Все"
              ? "Япония,Корея Южная,Китай"
              : element[i].textContent
          );
        } else {
          element[i].classList.remove("drop__item--active");
        }
      }
    }

    function setFilterYear(index, element) {
      for (let i = 0; i < element.length; i++) {
        if (index === i) {
          element[i].classList.add("drop__item--active");
          setIsCheckYaer(element[i].textContent);
        } else {
          element[i].classList.remove("drop__item--active");
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
      item.addEventListener("click", () =>
        setFilterCatigory(index, dropCatigoryEl)
      )
    );
    dropCountryEl.forEach((item, index) =>
      item.addEventListener("click", () =>
        setFilterCountry(index, dropCountryEl)
      )
    );
    dropYearEl.forEach((item, index) =>
      item.addEventListener("click", () => setFilterYear(index, dropYearEl))
    );
    dropFilterEl.forEach((item, index) =>
      item.addEventListener("click", () => setFilter(index))
    );
  }, [isInputVal, isYearVal, genreToggle, countryToggle]);

  for (let i = 0; i <= 33; i++) {
    years.push(2024 - i);
  }

  function clearHandel() {
    setIsCheckCountry("");
    setIsCheckCatigory("");
    setIsCheckYaer("");
  }

  return (
    <div className={`filter w-full`}>
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

                  {isCheckCatigory && (
                    <span className="filter__text">
                      (
                      {isCheckCatigory ===
                      "комедия,драма,боевик,биография,военный,фантастика,ужасы,криминал,аниме"
                        ? "Все"
                        : isCheckCatigory}
                      )
                    </span>
                  )}
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
                  {isCheckCountry && (
                    <span className="filter__text">
                      (
                      {isCheckCountry === "Япония,Корея Южная,Китай"
                        ? "Все"
                        : isCheckCountry}
                      )
                    </span>
                  )}
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
                <div className="filter__input__title">
                  <h1>Год</h1>
                  {isCheckYear && (
                    <span className="filter__text">({isCheckYear})</span>
                  )}
                </div>
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

            {isClearToggle && (
              <div className="filter__clearer">
                <button type="button" onClick={() => clearHandel()}>
                  Отменить фильтр <CloseSvg />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Filter;
