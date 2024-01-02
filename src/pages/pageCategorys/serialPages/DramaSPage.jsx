import { v4 as uuidv4 } from "uuid";

// Compoents
import Cards from "../../../components/Cards/Cards";
import useFetch from "../../../hooks/useFetch";

function DramaSPage() {
    const url =
      "https://kodikapi.com/list?token=465c15438e7799bee14ea8965dc6e845&with_episodes=true&with_material_data=true&limit=100&lgbt=false&types=foreign-serial&year=2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,&kinopoisk_rating=5-10&imdb_rating=8-10&drama_genres=драма&countries=Япония,Корея Южная,Китай";
    const { data, isLoad, error } = useFetch(url);

    return (
      <div className="DramaSPage w-full page catigoriyPage">
        <div className="container">
          <div className="popularNow__body">
            <h1 className="popularNow__title title">Драма</h1>
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

export default DramaSPage;
