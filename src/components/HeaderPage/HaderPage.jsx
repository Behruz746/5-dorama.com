import React from "react";

import { NavLink } from "react-router-dom";

import "./styles.scss";

function HaderPage() {
  return (
    <section className="Home__HaderPage w-full">
      <div className="container">
        <NavLink to="*">
          <div className="HaderPage__image">
            <div className="image"></div>
          </div>
        </NavLink>
      </div>
    </section>
  );
}

export default HaderPage;
