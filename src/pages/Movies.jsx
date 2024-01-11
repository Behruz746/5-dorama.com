import { useEffect, useState } from "react";
import axios from "axios";
import Sliders from "../components/Sliders";
import Filter from "../components/Filter";
import Cards from "../components/Cards";
import { v4 as uuidv4 } from "uuid";
import { useStateContext } from "../context/ContextProvider";

function Movies() {
  const {
    setIsCheckYaer,
    isCheckYear,
    setIsCheckCatigory,
    isCheckCatigory,
    setIsCheckCountry,
    isCheckCountry,
    isCheckTypem,
    isFilterToggle,
  } = useStateContext();
  const [isFilterData, setIsFilterData] = useState([]);
  const [toggleData, setToggleData] = useState(false);

  useEffect(() => {
    if (isCheckCountry || isCheckCatigory || isCheckYear) {
      setToggleData(true);
    } else {
      setToggleData(false);
    }

    const fetchFilter = async () => {
      try {
        const data = await axios.get(
          `https://kodikapi.com/list?token=465c15438e7799bee14ea8965dc6e845&with_episodes=true&with_material_data=true&limit=100&lgbt=false&types=${
            isCheckTypem ? isCheckTypem : "foreign-movie"
          }&year=${
            !isCheckYear
              ? "2024,2023,2022,2021,2020,2019,2018,2017"
              : isCheckYear
          },&kinopoisk_rating=5-10&imdb_rating=5-10&all_genres=${
            !isCheckCatigory
              ? "комедия,драма,биография,военный,фантастика,ужасы,криминал,аниме"
              : isCheckCatigory.toLowerCase()
          }&countries=${
            !isCheckCountry
              ? "Япония,Корея Южная,Китай"
              : isCheckCountry.toLowerCase()
          }&translation_id=647,605,674,670,871,794,639,879`
        );
        setIsFilterData(data.data.results);
      } catch (error) {
        console.log("Error: 404;", error);
      }
    };

    fetchFilter();
  }, [isCheckCountry, isCheckCatigory, isCheckYear, toggleData]);

  console.log(isCheckCountry, isCheckCatigory, isCheckYear);

  useEffect(() => {
    window.yaContextCb.push(() => {
      Ya.Context.AdvManager.render({
        blockId: "R-A-3835914-1",
        renderTo: "yandex_rtb_R-A-3835914-1",
      });
    });
  }, []);

  return (
    <>
      <div className="App__filems App__home w-full">
        <Filter
          setIsCheckCountry={setIsCheckCountry}
          setIsCheckCatigory={setIsCheckCatigory}
          setIsCheckYaer={setIsCheckYaer}
          isCheckCountry={isCheckCountry}
          isCheckCatigory={isCheckCatigory}
          isCheckYear={isCheckYear}
          toggleData={toggleData}
        />

        {!toggleData ? (
          <>
            <Sliders
              url={`https://kodikapi.com/list?token=465c15438e7799bee14ea8965dc6e845&with_episodes=true&with_material_data=true&limit=12&lgbt=false&types=foreign-movie&year=2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,&kinopoisk_rating=5-10&imdb_rating=5-10&drama_genres=комедия&countries=Япония,Корея Южная,Китай&translation_id=647,605,674,670,871,794,639,879`}
              title="Комедия"
              id="komediyaMovie"
              linkPage="comedy"
            />
            <Sliders
              url="https://kodikapi.com/list?token=465c15438e7799bee14ea8965dc6e845&with_episodes=true&with_material_data=true&limit=12&lgbt=false&types=foreign-movie&year=2015,2016,2017,2018,2019,2021,&kinopoisk_rating=5-10&imdb_rating=5-10&all_genres=драма&countries=Япония,Корея Южная,Китай"
              title="Драма"
              id="dramaMovie"
              linkPage="drama"
            />
            <Sliders
              url="https://kodikapi.com/list?token=465c15438e7799bee14ea8965dc6e845&with_episodes=true&with_material_data=true&limit=12&lgbt=false&kinopoisk_rating=5-10&imdb_rating=5-10&all_genres=боевик&year=2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,&countries=Япония,Корея Южная,Китай,&types=foreign-movie"
              title="Боевики"
              id="boavikMovie"
              linkPage="action"
            />
            <div className="container container--reklama">
              <div id="yandex_rtb_R-A-3835914-1"></div>
            </div>
            <Sliders
              url="https://kodikapi.com/list?token=465c15438e7799bee14ea8965dc6e845&with_episodes=true&with_material_data=true&limit=12&lgbt=false&kinopoisk_rating=5-10&imdb_rating=5-10&all_genres=биография&year=2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,&countries=Япония,Корея Южная,Китай,&types=foreign-movie"
              title="Биография"
              id="biografiyaMovie"
              linkPage="biography"
            />
            <Sliders
              url="https://kodikapi.com/list?token=465c15438e7799bee14ea8965dc6e845&with_episodes=true&with_material_data=true&limit=12&lgbt=false&kinopoisk_rating=5-10&imdb_rating=5-10&all_genres=военный&year=2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,&countries=Япония,Корея Южная,Китай,&types=foreign-movie"
              title="Военный"
              id="voyeniyMovie"
              linkPage="military"
            />
            <Sliders
              url="https://kodikapi.com/list?token=465c15438e7799bee14ea8965dc6e845&with_episodes=true&with_material_data=true&limit=12&lgbt=false&kinopoisk_rating=5-10&imdb_rating=5-10&all_genres=фантастика&year=2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,&countries=Япония,Корея Южная,Китай,&types=foreign-movie"
              title="Фантастика"
              id="fantastikaMovie"
              linkPage="fantastic"
            />
            <Sliders
              url="https://kodikapi.com/list?token=465c15438e7799bee14ea8965dc6e845&with_episodes=true&with_material_data=true&limit=12&lgbt=false&kinopoisk_rating=5-10&imdb_rating=5-10&all_genres=ужасы&year=2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,&countries=Япония,Корея Южная,Китай,&types=foreign-movie"
              title="Ужасы"
              id="ujesMovie"
              linkPage="horror"
            />
            <Sliders
              url="https://kodikapi.com/list?token=465c15438e7799bee14ea8965dc6e845&with_episodes=true&with_material_data=true&limit=12&lgbt=false&kinopoisk_rating=5-10&imdb_rating=5-10&all_genres=Криминал&year=2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,&countries=Япония,Корея Южная,Китай,&types=foreign-movie"
              title="Криминал"
              id="kriminalMovie"
              linkPage="crime"
            />
            <Sliders
              url="https://kodikapi.com/list?token=465c15438e7799bee14ea8965dc6e845&with_episodes=true&with_material_data=true&limit=12&lgbt=false&kinopoisk_rating=5-10&imdb_rating=5-10&all_genres=Аниме&year=2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,&countries=Япония,Корея Южная,Китай,&types=anime"
              title="Аниме"
              id="AnimeMovie"
              linkPage="anime"
            />
          </>
        ) : (
          <>
            {isFilterToggle && (
              <div className="filter__body w-full page">
                <div className="container">
                  <div className="popularNow__body">
                    <div className="filter__cards">
                      {!isFilterData.length == 0 ? (
                        <>
                          {isFilterData.map((data) => (
                            <Cards {...data} key={uuidv4()} />
                          ))}
                        </>
                      ) : (
                        <div className="error__container">
                          <h1>Не найдено</h1>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </>
  );
}

export default Movies;
