import Sliders from "../components/Sliders/Sliders";

function Dramas() {
  return (
    <section className="App__dramas w-full page">
      <Sliders
        url="https://kodikapi.com/list?token=7e04e50106ab3a654bef8c638ea36fa8&with_episodes=true&with_material_data=true&limit=100&lgbt=false&types=foreign-serial,soviet-cartoon,oreign-movie&year=2015,2016,2017,2018,2019,2021&kinopoisk_rating=8-10&imdb_rating=8-10&genres=комедия&countries=Япония,Корея Южная,Китай"
        title="Комедия"
      />
    </section>
  );
}

export default Dramas;
