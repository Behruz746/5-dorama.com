import { v4 as uuidv4 } from "uuid";
import ContentLoader from "react-content-loader";
import { NavLink } from "react-router-dom";
import "./styles.scss";
import { useContext, Fragment, useState } from "react";
import AppContext from "../../AppContext";

function Search() {
  const { isSearchData, toggleSeach, loadSearch, setToggleSeach } =
    useContext(AppContext);
  const [dataId, setDataId] = useState();

  /////////////////// component MyLoader //////////////////////////

  const MyLoader = (props) => (
    <ContentLoader
      speed={2}
      width={344}
      height={70}
      viewBox="0 0 344 70"
      backgroundColor="#768c9ea1"
      foregroundColor="#e0e0e0"
      {...props}
    >
      <rect x="104" y="277" rx="0" ry="0" width="0" height="2" />
      <rect x="55" y="4" rx="3" ry="3" width="250" height="10" />
      <rect x="55" y="20" rx="3" ry="3" width="41" height="8" />
      <rect x="4" y="2" rx="3" ry="3" width="42" height="63" />
    </ContentLoader>
  );

  return (
    <div className={toggleSeach ? "Search Search--active" : "Search"}>
      <>
        {isSearchData.map((data) => (
          <Fragment key={uuidv4()}>
            {loadSearch ? (
              <>
                {data.material_data && (
                  <NavLink to={`player/video/${dataId}`}>
                    <div
                      className="card"
                      onClick={() => {
                        setDataId(data.id);
                        setToggleSeach(false);
                        document.querySelector("body").style.overflow = "auto";
                      }}
                      onMouseOver={() => {
                        setDataId(data.id);
                      }}
                    >
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
                  </NavLink>
                )}
              </>
            ) : (
              <div>
                <MyLoader />
              </div>
            )}
          </Fragment>
        ))}
      </>
    </div>
  );
}

export default Search;
