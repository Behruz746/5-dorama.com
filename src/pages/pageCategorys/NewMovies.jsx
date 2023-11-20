import { v4 as uuidv4 } from "uuid";

// component
import Cards from "../../components/Cards/Cards";
import useFetch from "../../hooks/useFetch";

function NewMovies() {
  const url =
    "https://kodikapi.com/list?token=7e04e50106ab3a654bef8c638ea36fa8&with_episodes=true&with_material_data=true&limit=100&lgbt=false&types=foreign-serial,oreign-movie&year=2022,2023&kinopoisk_rating=5-10&imdb_rating=5-10&countries=Япония, Корея Южная, Китай&with_episodes_data=true";
  const { data, isLoad, error } = useFetch(url);

  return (
    <div className="NewMovies w-full page">
      <div className="container">
        <div className="popularNow__body">
          <h1 className="popularNow__title title">Новинки</h1>
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

export default NewMovies;
