import "./styles.scss";
import { useContext } from "react";
import AppContext from "../../AppContext";

function Search() {
  const { isSearchData, toggleSeach } = useContext(AppContext);

  return (
    <div className={ toggleSeach ? "Search Search--active" : "Search"}>
      {isSearchData.map((data) => (
        <>
          {data.material_data && (
            <div className="card">
              <img
                className="card__image"
                width={42}
                height={63}
                src={
                  data.material_data.poster_url
                    ? data.material_data.poster_url
                    : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPLxrenfHPaNrSMVtKYmvb19BOBDi2a5Wi3TeTWajnfcf2l_Je8SVUAsUZoU9VEWFVrsg&usqp=CAU"
                }
                alt="image movies"
              />
              <div className="card__content">
                <h1 className="card__title">{data.title}</h1>
                <p>{data.type}</p>
              </div>
            </div>
          )}
        </>
      ))}
    </div>
  );
}

export default Search;
