import React from "react";

import { NavLink } from "react-router-dom";

import "./styles.scss";

function HeaderPage({image, containerBlur}) {
  return (
    <section className="Home__HaderPage w-full">
      <div className={`container ${containerBlur}`}>
        <NavLink to="*">
          <div className="HaderPage__image">
            <div className="image">
              <img
                src={image} 
                alt="background image"
              />
            </div>
          </div>
        </NavLink>
      </div>
    </section>
  );
}

export default HeaderPage;
