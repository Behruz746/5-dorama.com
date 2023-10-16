import { v4 as uuidv4 } from 'uuid';

// Compoenents
import HeaderPage from "../components/HeaderPage/HeaderPage";
import Sliders from "../components/Sliders/Sliders";

import "./styles.scss";

import { useContext } from "react";
import AppContext from "../AppContext";

function Home() {
  const { dataList } = useContext(AppContext);

  return (
    <div className="App__home w-full page">
      <HeaderPage image="./images/png/backound__img01.png" />
      <Sliders url="https://kodikapi.com/list?token=7e04e50106ab3a654bef8c638ea36fa8&with_episodes=true&with_material_data=true&limit=50&lgbt=false&types=foreign-serial&sort=КиноПоиска&drama_genres=" title="Популярные сейчас" />
      <Sliders url="https://kodikapi.com/list?token=7e04e50106ab3a654bef8c638ea36fa8&with_episodes=true&with_material_data=true&limit=20&lgbt=false&types=anime" title="Аниме" />
      <Sliders url="https://kodikapi.com/list?token=7e04e50106ab3a654bef8c638ea36fa8&with_episodes=true&with_material_data=true&limit=13&lgbt=false&types=anime&sort=year" title="Популярные сейчас аниме" />
    </div>
  );
}

export default Home;
