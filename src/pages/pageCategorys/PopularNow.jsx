import axios from "axios";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

import './style.scss'

// component
import Cards from "../../components/Cards/Cards";

function PopularNow() {
  const [isMovieData, setIsMovieData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await axios.get(
        "https://kodikapi.com/list?token=7e04e50106ab3a654bef8c638ea36fa8&with_episodes=true&with_material_data=true&limit=18&lgbt=false&types=foreign-serial,soviet-cartoon,oreign-movie&year=2015,2016,2017,2018,2019,2021&kinopoisk_rating=8-10&imdb_rating=8-10&countries=Япония,Корея Южная,Китай,тайлант&with_episodes_data=true&with_page_links=true&has_field=kinopoisk_id&translation_type=voice&with_seasons=true"
      );
      setIsMovieData(data.data.results);
    };

    fetchData();
  }, []);

  console.log(isMovieData);

  return (
    <div className="PopularNow w-full page">
      <div className="container">
        <div className="PopularNow__inner">
          {isMovieData.map((data) => (
            <Cards {...data} key={uuidv4()} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default PopularNow;
