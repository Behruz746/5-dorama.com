import React from "react";

// Compoenents
import HeaderPage from "../components/HeaderPage/HeaderPage";
import Sliders from "../components/Sliders/Sliders";

import "./styles.scss";

import { useContext } from "react";
import AppContext from "../AppContext";

function Home() {
  const { dataList } = useContext(AppContext);

  const sliderData = [
    {
      title: "Популярные сейчас",
      url: "https://kodikapi.com/list?token=7e04e50106ab3a654bef8c638ea36fa8&with_episodes=true&with_material_data=true&limit=20&lgbt=false&types=foreign-serial",
    },
    {
      title: "Аниме",
      url: "https://kodikapi.com/list?token=7e04e50106ab3a654bef8c638ea36fa8&with_episodes=true&with_material_data=true&limit=20&lgbt=false&types=anime",
    },
    {
      title: "Популярные сейчас аниме",
      url: "https://kodikapi.com/list?token=7e04e50106ab3a654bef8c638ea36fa8&with_episodes=true&with_material_data=true&limit=13&lgbt=false&types=anime&sort=year",
    },
  ];

  return (
    <div className="App__home w-full page">
      <HeaderPage image="./images/png/backound__img01.png" />

      {sliderData.map((data) => {
        return <Sliders {...data} />;
      })}
    </div>
  );
}

export default Home;
