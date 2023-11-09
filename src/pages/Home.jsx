// Compoenents
import Sliders from "../components/Sliders/Sliders";
import HeaderSlider from "../components/HeaderSlider/HeaderSlider";

import "./styles.scss";

function Home() {
  return (
    <div className="App__home w-full page">
      <HeaderSlider />
      <Sliders
        url="https://kodikapi.com/list?token=7e04e50106ab3a654bef8c638ea36fa8&with_episodes=true&with_material_data=true&limit=50&lgbt=false&types=foreign-serial,soviet-cartoon,oreign-movie&year=2015,2016,2017,2018,2019,2021&kinopoisk_rating=8-10&imdb_rating=8-10&countries=Япония, Корея Южная, Китай,тайлант&with_episodes_data=true"
        title="Популярные сейчас"
      />
      <Sliders
        url="https://kodikapi.com/list?token=7e04e50106ab3a654bef8c638ea36fa8&with_episodes=true&with_material_data=true&limit=50&lgbt=false&types=foreign-serial,oreign-movie&year=2021,2022,2023&kinopoisk_rating=5-10&imdb_rating=5-10&countries=Япония, Корея Южная, Китай&with_episodes_data=true"
        title="Новинки"
      />
      <Sliders
        url="https://kodikapi.com/list?token=7e04e50106ab3a654bef8c638ea36fa8&with_episodes=true&with_material_data=true&limit=50&lgbt=false&types=foreign-movie&year=2000,2016,2017,2018,2019,2020,2021,2022,2023&kinopoisk_rating=6-10&countries=Япония, Корея Южная, Китай&with_episodes_data=true"
        title="Фильмы"
      />
      <Sliders
        url="https://kodikapi.com/list?token=7e04e50106ab3a654bef8c638ea36fa8&with_episodes=true&with_material_data=true&limit=100&lgbt=false&types=foreign-serial&year=2015,2014,2018&kinopoisk_rating=5-10&countries=Япония, Корея Южная, Китай&with_episodes_data=true"
        title="Дорамы"
      />
      <Sliders
        url="https://kodikapi.com/list?token=7e04e50106ab3a654bef8c638ea36fa8&with_episodes=true&with_material_data=true&limit=100&lgbt=false&types=anime&year=2015,2014,2016,2017,2018, 2020,2021,2022,2023&kinopoisk_rating=7-10&countries=Япония&with_episodes_data=true"
        title="Аниме"
      />
    </div>
  );
}

export default Home;
