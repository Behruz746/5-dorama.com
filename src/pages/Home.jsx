import { v4 as uuidv4 } from "uuid";

// Compoenents
import HeaderPage from "../components/HeaderPage/HeaderPage";
import Sliders from "../components/Sliders/Sliders";

import "./styles.scss";

import { useContext } from "react";
import AppContext from "../AppContext";

function Home() {
  return (
    <div className="App__home w-full page">
      <HeaderPage image="./images/png/backound__img01.png" />
      <Sliders
        url="https://kodikapi.com/list?token=7e04e50106ab3a654bef8c638ea36fa8&with_episodes=true&with_material_data=true&limit=50&lgbt=false&types=foreign-serial,soviet-cartoon,oreign-movie&year=2015,2016,2017,2018,2019,2021&kinopoisk_rating=8-10&imdb_rating=8-10"
        title="Популярные сейчас"
      />
      <Sliders
        url="https://kodikapi.com/list?token=7e04e50106ab3a654bef8c638ea36fa8&with_episodes=true&with_material_data=true&limit=50&lgbt=false&types=foreign-serial,oreign-movie&year=2019,2020,2021,2022,2023&kinopoisk_rating=5-10&imdb_rating=5-10"
        title="Новинки"
      />
      <Sliders
        url="https://kodikapi.com/list?token=7e04e50106ab3a654bef8c638ea36fa8&with_episodes=true&with_material_data=true&limit=50&lgbt=false&types=foreign-movie&year=2000,2016,2017,2018,2019,2020,2021,2022,2023&kinopoisk_rating=6-10"
        title="Фильмы"
      />
      <Sliders
        url="https://kodikapi.com/list?token=7e04e50106ab3a654bef8c638ea36fa8&with_episodes=true&with_material_data=true&limit=50&lgbt=false&types=foreign-serial&year=2021,2022,2023&kinopoisk_rating=5-10"
        title="Дорамы"
      />
    </div>
  );
}

export default Home;
