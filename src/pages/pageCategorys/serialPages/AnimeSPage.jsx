import { v4 as uuidv4 } from "uuid";

// Compoents
import Cards from "../../../components/Cards/Cards";
import useFetch from "../../../hooks/useFetch";

function AnimeSPage() {
  const url =
    "https://kodikapi.com/list?token=465c15438e7799bee14ea8965dc6e845&with_episodes=true&with_material_data=true&limit=100&lgbt=false&kinopoisk_rating=5-10&imdb_rating=5-10&all_genres=Аниме&year=2000,2001,2002,2020,2021,2022,2023,&countries=Япония,Корея Южная,&types=anime-serial";
  const { data, isLoad, error } = useFetch(url);

  return (
    <div className="AnimeSPage w-full page catigoriyPage">
      <div className="container">
        <div className="popularNow__body">
          <h1 className="popularNow__title title">Аниме</h1>
          <div
            className={`${
              !isLoad ? "container__cards" : "container__cards--load"
            } ${!error ? "container__cards" : "container__cards--load"}`}
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

export default AnimeSPage;
