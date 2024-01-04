import { v4 as uuidv4 } from "uuid";

// component
import useFetch from "../../hooks/useFetch";
import Cards from "../../components/Cards";

function PopularNow() {
  const url =
    "https://kodikapi.com/list?token=465c15438e7799bee14ea8965dc6e845&with_episodes=true&with_material_data=true&limit=100&lgbt=false&types=foreign-serial,soviet-cartoon,oreign-movie&year=2015,2016,2017,2018,2019,2020,2021,2022,2023&kinopoisk_rating=8-10&imdb_rating=8-10&countries=Япония,Корея Южная,Китай,тайлант&with_episodes_data=true&with_page_links=true&has_field=kinopoisk_id&translation_type=voice&with_seasons=true&translation_id=639"; // 639 // 2608
  const { data, isLoad, error } = useFetch(url);

  return (
    <div className="PopularNow w-full page catigoriyPage">
      <div className="container">
        <div className="popularNow__body">
          <h1 className="popularNow__title title">Популярные сейчас</h1>
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

export default PopularNow;
