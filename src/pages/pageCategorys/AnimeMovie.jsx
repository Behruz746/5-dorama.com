import { v4 as uuidv4 } from "uuid";

// component
import Cards from "../../components/Cards/Cards";
import useFetch from "../../hooks/useFetch";

import "./style.scss";

function AnimeMovie() {
  const url =
    "https://kodikapi.com/list?token=7e04e50106ab3a654bef8c638ea36fa8&with_episodes=true&with_material_data=true&limit=100&lgbt=false&types=anime&year=2015,2014,2016,2017,2018, 2020,2021,2022,2023&kinopoisk_rating=7-10&countries=Япония&with_episodes_data=true";
  const { data, isLoad, error } = useFetch(url);

  return (
    <div className="AnimeMovie w-full page catigoriyPage">
      <div className="container">
        <div className="popularNow__body">
          <h1 className="popularNow__title title">Аниме</h1>
          <div
            className={`${
              !isLoad ? "container__cards" : "container__cards--load"
            } ${!error ? "container__cards" : "container__cards--load"} `}
          >
            {!error ? (
              <>
                {!isLoad ? (
                  <>
                    {data.map((data) => (
                      <Cards {...data} key={uuidv4()} />
                    ))}
                  </>
                ) : (
                  <div className="lds-ellipsis">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                )}
              </>
            ) : (
              <h1>Error: 404;</h1>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AnimeMovie;
