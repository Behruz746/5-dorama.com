import Sliders from "../components/Sliders/Sliders";

import { useEffect } from "react";

function Dramas() {
  useEffect(() => {
    window.yaContextCb.push(() => {
      Ya.Context.AdvManager.render({
        blockId: "R-A-3835914-13",
        renderTo: "yandex_rtb_R-A-3835914-13",
      });
    });
  }, []);

  return (
    <>
      <section className="App__dramas  App__home w-full page">
        <Sliders
          url="https://kodikapi.com/list?token=7e04e50106ab3a654bef8c638ea36fa8&with_episodes=true&with_material_data=true&limit=50&lgbt=false&types=foreign-serial&year=2015,2016,2017,2018,2019,2021,&kinopoisk_rating=8-10&imdb_rating=8-10&all_genres=комедия&countries=Япония,Корея Южная,Китай&order=asc&translation_type=voice"
          title="Комедия"
          id="komediyaSerial"
        />
        <Sliders
          url="https://kodikapi.com/list?token=7e04e50106ab3a654bef8c638ea36fa8&with_episodes=true&with_material_data=true&limit=50&lgbt=false&types=foreign-serial&year=2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,&kinopoisk_rating=5-10&imdb_rating=8-10&drama_genres=драма&countries=Япония,Корея Южная,Китай"
          title="Драма"
          id="dramaSerial"
        />
        <Sliders
          url="https://kodikapi.com/list?token=7e04e50106ab3a654bef8c638ea36fa8&with_episodes=true&with_material_data=true&limit=50&lgbt=false&kinopoisk_rating=5-10&imdb_rating=8-10&genres=боевик&year=2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,&countries=Япония,Корея Южная,Китай,&types=foreign-serial"
          title="Боевики"
          id="boavikSerial"
        />
        <Sliders
          url="https://kodikapi.com/list?token=7e04e50106ab3a654bef8c638ea36fa8&with_episodes=true&with_material_data=true&limit=50&lgbt=false&kinopoisk_rating=5-10&imdb_rating=8-10&genres=биография&year=2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,&countries=Япония,Корея Южная,Китай,&types=foreign-serial"
          title="Биография"
          id="biografiyaSerial"
        />
        <Sliders
          url="https://kodikapi.com/list?token=7e04e50106ab3a654bef8c638ea36fa8&with_episodes=true&with_material_data=true&limit=50&lgbt=false&kinopoisk_rating=5-10&imdb_rating=5-10&all_genres=военный&year=2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,&countries=Япония,Корея Южная,Китай,&types=foreign-serial"
          title="Военный"
          id="voyeniySerial"
        />
        <Sliders
          url="https://kodikapi.com/list?token=7e04e50106ab3a654bef8c638ea36fa8&with_episodes=true&with_material_data=true&limit=50&lgbt=false&kinopoisk_rating=5-10&imdb_rating=5-10&all_genres=фантастика&year=2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,&countries=Япония,Корея Южная,Китай,&types=foreign-serial"
          title="Фантастика"
          id="fantastikaSerial"
        />
        <Sliders
          url="https://kodikapi.com/list?token=7e04e50106ab3a654bef8c638ea36fa8&with_episodes=true&with_material_data=true&limit=50&lgbt=false&kinopoisk_rating=5-10&imdb_rating=5-10&all_genres=ужасы&year=2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,&countries=Япония,Корея Южная,Китай,&types=foreign-serial"
          title="Ужасы"
          id="ujesSerial"
        />
        <Sliders
          url="https://kodikapi.com/list?token=7e04e50106ab3a654bef8c638ea36fa8&with_episodes=true&with_material_data=true&limit=50&lgbt=false&kinopoisk_rating=5-10&imdb_rating=5-10&all_genres=Криминал&year=2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,&countries=Япония,Корея Южная,Китай,&types=foreign-serial"
          title="Криминал"
          id="kriminalSerial"
        />
        <Sliders
          url="https://kodikapi.com/list?token=7e04e50106ab3a654bef8c638ea36fa8&with_episodes=true&with_material_data=true&limit=50&lgbt=false&kinopoisk_rating=5-10&imdb_rating=5-10&all_genres=Аниме&year=2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,&countries=Япония,Корея Южная,Китай,&types=anime-serial"
          title="Аниме Сериал"
          id="AnimeSerial"
        />

        <div className="container container--reklama">
          <div id="yandex_rtb_R-A-3835914-13"></div>
        </div>
      </section>
    </>
  );
}

export default Dramas;
