import React from "react";

// Compoenents
import HeaderPage from "../components/HeaderPage/HeaderPage";
import Sliders from "../components/Sliders/Sliders";

import './styles.scss'

function Home() {
  return (
    <div className="App__home w-full page">
      <HeaderPage image='./images/png/backound__img01.png' />
      <Sliders />

    </div>
  );
}

export default Home;
