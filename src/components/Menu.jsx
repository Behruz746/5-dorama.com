import { useState, useEffect } from "react"
import { NavLink } from "react-router-dom"
import { v4 as uuidv4 } from "uuid"
import { dropData, dropDataMovies } from "../data/data"
import {
  SvgEl,
  SvgDorama,
  SvgTreler,
  SvgMoveis,
  SvgThunder,
  SvgDocument,
  SvgPeople,
  SvgMessage,
  SvgPlay,
} from "./SvgEl/SvgEl"
import { useStateContext } from "../context/ContextProvider"

function Menu() {
  const { isToggle, setIsToggle } = useStateContext()
  const [isArrorToggle00, setIsArrowToggle00] = useState(false)
  const [isArrorToggle01, setIsArrowToggle01] = useState(false)
  const [windowHeight, setWindowHeight] = useState(window.innerHeight)

  useEffect(() => {
    const navListEl = document.querySelector(".nav__list")
    const handleResize = () => {
      setWindowHeight(window.innerHeight)
      navListEl.style.height = `${window.innerHeight - 100}px`
    }
    window.addEventListener("resize", handleResize)
    handleResize()
    return () => {
      window.removeEventListener("resize", handleResize)
      navListEl.style.height = `${window.innerHeight - 100}px`
    }
  }, [windowHeight])

  const scrollFun = (event, index, id) => {
    const targetId = id.slice(index)
    const targetElement = document.querySelector(targetId)
    if (targetElement) {
      event.preventDefault()
      const targetOffsetTop = targetElement.offsetTop
      const scrollToPosition = targetOffsetTop - 180 // 180px tepaga kotariladi
      window.scrollTo({
        top: scrollToPosition,
        behavior: "smooth",
      })
    }
  }

  const ListDrop = () => (
    <div
      className={
        !isArrorToggle00 ? "drop__list" : "drop__list drop__list--active"
      }
    >
      {dropData.map((data) => (
        <div key={uuidv4()}>
          <a
            href={data.link}
            className="d-flex drop__item"
            onClick={(event) => scrollFun(event, 7, data.link)}
          >
            <SvgPlay />
            <h1>{data.name}</h1>
          </a>
        </div>
      ))}
    </div>
  )

  const ListMovies = () => (
    <div
      className={
        !isArrorToggle01 ? "drop__list" : "drop__list drop__list--active"
      }
    >
      <div>
        {dropDataMovies.map((data) => (
          <div key={uuidv4()}>
            <a
              href={data.link}
              className="d-flex drop__item"
              onClick={(event) => scrollFun(event, 7, data.link)}
            >
              <SvgPlay />
              <h1>{data.name}</h1>
            </a>
          </div>
        ))}
      </div>
    </div>
  )

  const BottomMenu = () => (
    <div
      className={
        isToggle ? "famous__filems" : "famous__filems famous__filems--active"
      }
    >
      <NavLink
        to="documentation"
        className={isToggle ? "list__item" : "list__link list__link--active"}
        key={uuidv4()}
        onClick={() => setIsToggle(true)}
      >
        <SvgDocument />
        <h3>Правовая информация</h3>
      </NavLink>
      {/* О нашем проекте will add 1.2 v */}
      <>
        {/* <NavLink
        to="about"
        className={isToggle ? "list__item" : "list__link list__link--active"}
        key={uuidv4()}
        onClick={() => setIsToggle(true)}
      >
        <SvgPeople />
        <h3>О нашем проекте</h3>
      </NavLink> */}
      </>
      <a
        target="_blank"
        href="https://www.uzapp.store/"
        className={isToggle ? "list__item" : "list__link list__link--active"}
        key={uuidv4()}
        onClick={() => setIsToggle(true)}
      >
        <SvgThunder />
        <h3 style={{ color: "#FFBA33FF" }}>МОД игры</h3>
      </a>
      <a
        href="https://t.me/dorama5bot"
        className={isToggle ? "list__item" : "list__link list__link--active"}
        key={uuidv4()}
        onClick={() => setIsToggle(true)}
      >
        <SvgMessage />
        <h3>Связаться с нами</h3>
      </a>
    </div>
  )

  return (
    <div className={isToggle ? "App__nav" : "App__nav App__nav--active"}>
      <nav className="nav__list">
        <div>
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

              {/* Трейлер will add update 1.2 v */}
              <>
                {/* <div 
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
            </div> */}
              </>
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
                    <h3>Сериал</h3>
                  </div>
                </NavLink>

                <div
                  className="image__box"
                  onClick={() => {
                    setIsArrowToggle00(!isArrorToggle00)
                    setIsArrowToggle01(false)
                  }}
                >
                  <img
                    className={
                      !isArrorToggle00
                        ? "toggle__arrow"
                        : "toggle__arrow--actve"
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
                  to="movies"
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
                    setIsArrowToggle01(!isArrorToggle01)
                    setIsArrowToggle00(false)
                  }}
                >
                  <img
                    className={
                      !isArrorToggle01
                        ? "toggle__arrow"
                        : "toggle__arrow--actve"
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

          {/* this is button menu component */}
          <BottomMenu />
        </div>

        <h1
          className={
            isToggle ? "menu__footer__text" : "menu__footer__text--active"
          }
        >
          Version 1.2.9 <span>(Beta)</span>
        </h1>
      </nav>
    </div>
  )
}

export default Menu
