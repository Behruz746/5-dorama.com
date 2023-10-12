import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

// Data
import { dataNav, famousData } from "../../data/data";

// AppContext
import AppContext from "../../AppContext";

import "./styles.scss";

function Menu() {
  const { isToggle, setIsToggle } = useContext(AppContext);

  return (
    <div className={isToggle ? "App__nav" : "App__nav App__nav--active"}>
      <nav className="nav__list">
        <div className="list__items">
          {dataNav.map(({ text, link, icon }) => (
            <NavLink
              to={link}
              className={
                isToggle ? "list__link" : "list__link list__link--active"
              }
              key={uuidv4()}
              onClick={() => setIsToggle(true)}
            >
              <img src={icon} alt="item icon" />
              <h3>{text}</h3>
            </NavLink>
          ))}
        </div>
        <div
          className={isToggle ? "nav__line" : "nav__line nav__line--active"}
        ></div>
        <div
          className={isToggle ? "famous__filems" : "famous__filems famous__filems--active"}
        >
          {famousData.map(({ text, link }) => (
            <NavLink
              to={link}
              className={
                isToggle ? "list__link" : "list__link list__link--active"
              }
              key={uuidv4()}
              onClick={() => setIsToggle(true)}
            >
              <img src="./images/svg/play__icon.svg" alt="item icon" />
              <h3>{text}</h3>
            </NavLink>
          ))}
        </div>
      </nav>
    </div>
  );
}

export default Menu;
