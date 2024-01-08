import { NavLink } from "react-router-dom";
import { SvgEl, SvgDorama, SvgTreler, SvgMoveis, SvgAnd } from "./SvgEl/SvgEl";

function MenuMobile() {
  return (
    <div className="mine__menu">
      <nav className="mobile__nav">
        <NavLink to="/">
          <SvgEl />
          <h3>Главная</h3>
        </NavLink>
        <NavLink to="dramas">
          <SvgDorama />
          <h3>Дорамы</h3>
        </NavLink>
        <NavLink to="movies">
          <SvgMoveis />
          <h3>Фильмы</h3>
        </NavLink>
        {/* Трейлер will add 1.2 v */}
        {/* <NavLink to="shorts">
          <SvgTreler />
          <h3>Трейлер</h3>
        </NavLink> */}
        <NavLink to="documentation">
          <SvgAnd />
          <h3>Ещё</h3>
        </NavLink>
      </nav>
    </div>
  );
}

export default MenuMobile;
