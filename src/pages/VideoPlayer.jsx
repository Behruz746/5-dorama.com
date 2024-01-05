import { useEffect, useState, useRef } from "react";
import { NavLink } from "react-router-dom";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { useParams } from "react-router-dom";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

function VideoPlayer() {
  const [isDataVideo, setIsDataVideo] = useState([]);
  const [testToggle, setTextToggle] = useState(false);
  const paragraphRef = useRef(null);
  const [isType, setIsType] = useState("фильм");
  const [isdataType, setIsDataType] = useState();
  const [isSerial, setIsSerial] = useState([]);
  const [isSerialLink, setIsSerialLink] = useState();
  const [isIndex, setIsIndex] = useState();
  const [isDataSimilar, setIsSimilar] = useState([]);
  const [isGenes, setIsGenes] = useState("");
  const [isDataList, setIsDataList] = useState([]);
  const [indexBol, setIndexBoll] = useState(0);
  const date = String(isDataVideo.updated_at).slice(0, 4);
  const serialArrD = Object.values(isSerial);
  const { id } = useParams();

  const Svg = () => (
    <svg
      className="card__icon"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_361_3353)">
        <path
          d="M7.99999 11.5133L10.7667 13.1867C11.2733 13.4933 11.8933 13.04 11.76 12.4667L11.0267 9.31999L13.4733 7.19999C13.92 6.81332 13.68 6.07999 13.0933 6.03332L9.87332 5.75999L8.61332 2.78665C8.38665 2.24665 7.61332 2.24665 7.38665 2.78665L6.12665 5.75332L2.90665 6.02665C2.31999 6.07332 2.07999 6.80665 2.52665 7.19332L4.97332 9.31332L4.23999 12.46C4.10665 13.0333 4.72665 13.4867 5.23332 13.18L7.99999 11.5133Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_361_3353">
          <rect width="16" height="16" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );

  useEffect(() => {
    const fetchFun = async () => {
      try {
        const data = await axios.get(
          "https://kodikapi.com/list?token=465c15438e7799bee14ea8965dc6e845&with_episodes=true&with_material_data=true&limit=20&lgbt=false&types=foreign-movie&year=2014,2015,2016,2017,2018,2019,2020,&kinopoisk_rating=7-10&imdb_rating=7-10&all_genres=комедия,ужасы,военный,боевик,биография,фантастика,&countries=Япония,Корея Южная,Китай"
        );
        setIsDataList(data.data.results);
      } catch (error) {
        console.log("Error: 404", error);
      }
    };
    fetchFun();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await axios.get(
          `https://kodikapi.com/search?token=465c15438e7799bee14ea8965dc6e845&id=${id}&with_episodes=true&with_material_data=true&lgbt=false`
        );
        setIsDataVideo(data.data.results[0]);
        setIsDataType(data.data.results[0].type);
        setIsGenes(data.data.results[0].material_data.genres[0]);
        setIsSerial(
          data.data.results[0].seasons[data.data.results[0].last_season]
            .episodes
        );
      } catch (error) {
        console.log("Error: 404;", error);
      }
    };
    fetchData();
  }, [id]);

  useEffect(() => {
    document.title = `${
      isDataVideo.material_data && isDataVideo.material_data.title
    }`;
  }, [id, isDataVideo.material_data]);

  useEffect(() => {
    const fetchFun = async () => {
      try {
        const data = await axios.get(
          `https://kodikapi.com/list?token=465c15438e7799bee14ea8965dc6e845&with_episodes=true&with_material_data=true&limit=35&lgbt=false&types=${isdataType}&year=2016,2017,2018,2019,2020,&kinopoisk_rating=5-10&imdb_rating=5-10&all_genres=${isGenes},&countries=Япония,Корея Южная,Китай`
        );
        setIsSimilar(data.data.results);
      } catch (error) {
        console.log("Error: 404", error);
      }
    };
    fetchFun();
  }, [isdataType, isGenes]);

  useEffect(() => {
    const aboutText = document.querySelector(".about__text");
    aboutText.addEventListener("click", () => {
      setTextToggle(!testToggle);
    });
  }, []);

  useEffect(() => {
    const minAge = document.querySelector("#minAge");

    if (minAge.textContent !== null) {
      minAge.textContent = "12+";
    }
  }, [isDataVideo]);

  useEffect(() => {
    if (isdataType) {
      if (isDataVideo.type === "serial") {
        setIsType("серии");
      }

      if (isDataVideo.type === "movie") {
        setIsType("фильм");
      }

      if (isDataVideo.type === "anime") {
        setIsType("аниме");
      }
    }
  }, [isdataType]);

  useEffect(() => {
    window.yaContextCb.push(() => {
      Ya.Context.AdvManager.render({
        blockId: "R-A-3835914-11",
        type: "rewarded",
        platform: "desktop",
      });
    });
  }, []);

  useEffect(() => {
    window.yaContextCb.push(() => {
      Ya.Context.AdvManager.render({
        blockId: "R-A-3835914-7",
        renderTo: "yandex_rtb_R-A-3835914-7",
      });
    });
  }, []);

  ///////////// Components ////////////////
  const SerialBlock = () => (
    <>
      <div className="video__searals--content">
        <h1 className="video__searals--title">Все серии</h1>
        <p>{isDataVideo.last_episode} есть серии. посмотреть все бесплатно</p>
      </div>
      <div className="video__serial--grids">
        <>
          {serialArrD.map((link, index) => {
            return (
              <div
                key={uuidv4()}
                className={`${
                  isIndex === index + 1 ? "active serial" : "serial"
                } ${index === indexBol ? "active" : "serial"}`}
                onClick={() => {
                  setIsSerialLink(link);
                  setIsIndex(index + 1);
                  setIndexBoll(null);
                  console.log(indexBol);
                }}
              >
                <h1 className="serila__epi">{index + 1}</h1>
              </div>
            );
          })}
        </>
      </div>
    </>
  );

  const ResembleBlock = ({ title }) => (
    <>
      <div className="video__searals--content">
        <h1 className="video__searals--title">{title}</h1>
      </div>
      <div className="over-h">
        <div className="video__movie--flex">
          {isDataSimilar.map((item) => {
            return (
              <NavLink to={`/player/video/${item.id}`} key={uuidv4()}>
                <div
                  className="movie__card"
                  onClick={() => {
                    setIdId(item.id);
                  }}
                >
                  <div>
                    <h1 className="movie__title">{item.title && item.title}</h1>
                  </div>
                  <img
                    src={item.material_data && item.material_data.poster_url}
                    alt="Movie image"
                  />
                </div>
              </NavLink>
            );
          })}
        </div>
      </div>
    </>
  );
  const RecomentionBlock = () => (
    <>
      <div className="video__searals--content">
        <h1 className="video__searals--title" style={{ textAlign: "center" }}>
          для вас
        </h1>
      </div>
      <div className="over-h">
        <div className="video__movie--flex">
          {isDataList.map((item) => {
            return (
              <NavLink to={`/player/video/${item.id}`} key={uuidv4()}>
                <div
                  className="movie__card"
                  onClick={() => {
                    setIdId(item.id);
                  }}
                >
                  <div>
                    <h1 className="movie__title">{item.title && item.title}</h1>
                  </div>
                  <img
                    src={item.material_data && item.material_data.poster_url}
                    alt="Movie image"
                  />
                </div>
              </NavLink>
            );
          })}
        </div>
      </div>
    </>
  );

  const VideoData = () => (
    <div className="Video__data">
      <TooltipComponent
        content={`Оценки и рейтинг`}
        position="BottomCenter"
        style={{ display: "block" }}
      >
        <div className="Video__rating d-flex-data">
          <Svg />
          {isDataVideo.material_data ? (
            <h2 className="video__data-text" style={{ color: "#FFBA33" }}>
              {isDataVideo.material_data.kinopoisk_rating
                ? isDataVideo.material_data.kinopoisk_rating
                : "5.8"}
            </h2>
          ) : (
            <h2 className="video__data-text" style={{ color: "#FFBA33" }}>
              5.8
            </h2>
          )}
        </div>
      </TooltipComponent>

      <span>|</span>
      <TooltipComponent
        content={`год выхода ${isDataVideo.last_episode ? "сериал" : isType}`}
        position="BottomCenter"
        style={{ display: "block" }}
      >
        <div className="Video__date d-flex-data">
          <h2 className="video__data-text">{isDataVideo.year}</h2>
          <span>-</span>
          <h2 className="video__data-text">{date}</h2>
        </div>
      </TooltipComponent>

      <span>|</span>
      <TooltipComponent
        content={`Возрастное ограничение`}
        position="BottomCenter"
        style={{ display: "block" }}
      >
        <div className="Video__age">
          <h2 className="video__data__text--min" id="minAge">
            {isDataVideo.material_data &&
              `${
                isDataVideo.material_data.minimal_age
                  ? isDataVideo.material_data.minimal_age
                  : "14"
              }+`}
          </h2>
        </div>
      </TooltipComponent>
      <span>|</span>

      {isDataVideo.material_data && (
        <>
          {isDataVideo.material_data.countries ? (
            <>
              {isDataVideo.material_data.countries.map((country) => (
                <div className="Video__country" key={uuidv4()}>
                  <TooltipComponent
                    content={`Страна`}
                    position="BottomCenter"
                    style={{ display: "block" }}
                  >
                    {country ? (
                      <h2 className="video__data-textMin">{country}</h2>
                    ) : (
                      <h2 className="video__data-textMin">No country</h2>
                    )}
                  </TooltipComponent>
                </div>
              ))}
            </>
          ) : (
            <h1>Информации о стране нет</h1>
          )}
        </>
      )}
    </div>
  );

  const VideoActiors = () => {
    return (
      <div
        className="hidden--block"
        style={{
          transform: `translateY(${testToggle && testToggle ? "15px" : "0px"})`,
        }}
      >
        <div className="Video__actiors">
          {isDataVideo.material_data && (
            <>
              {isDataVideo.material_data.actors &&
                isDataVideo.material_data.actors.map((item, index) => (
                  <div className={`actior__card`} key={uuidv4()}>
                    <div
                      className={`actior__box random--color${
                        index > 6 ? index - 6 : index
                      }`}
                    >
                      <h1>
                        {item.split(" ")[0].charAt(0)}
                        {item.split(" ")[1] && item.split(" ")[1].charAt(0)}
                      </h1>
                    </div>
                    <h2 className="actior__name">{item}</h2>
                    <p>Актриса</p>
                  </div>
                ))}
            </>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="VideoPlayer w-full">
      <div className="container">
        <div className="Video__container">
          {isDataVideo.link ? (
            <iframe
              id="videoPage"
              className="videoPlayer"
              src={!isSerialLink ? isDataVideo.link : isSerialLink}
              frameBorder="0"
              allowFullScreen
              allow="autoplay *; fullscreen *"
            ></iframe>
          ) : (
            <div className="video--animtion">
              <div className="lds-ellipsis">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
          )}

          <div className="video__serials">
            {isDataVideo.last_episode ? (
              <SerialBlock />
            ) : (
              <ResembleBlock title={"Похожие фильмы"} />
            )}
          </div>
        </div>

        <div className="VideoPlayer__content">
          <div className="VideoPlayer__content--row">
            <div className="VideoPlayer__title">
              <TooltipComponent
                content={`название ${
                  isDataVideo.last_episode ? "сериала" : isType
                }`}
                position="TopCenter"
                style={{ display: "block" }}
              >
                <h1> {isDataVideo.title}</h1>
              </TooltipComponent>
              <span>|</span>
              <TooltipComponent
                content={`${isDataVideo.last_episode ? "серии" : isType}`}
                position="TopCenter"
                style={{ display: "block" }}
              >
                <h1>
                  {isDataVideo.last_episode ? (
                    <>{!isIndex ? 1 : isIndex}-серии</>
                  ) : (
                    <>{isType}</>
                  )}
                </h1>
              </TooltipComponent>
            </div>

            <VideoData />
          </div>

          <div className="VideoPlayer__column">
            <div className="VideoPlayer__about">
              <div className="about__contetn">
                <TooltipComponent
                  content={`О фильме`}
                  position="TopCenter"
                  style={{ display: "block" }}
                >
                  <p
                    ref={paragraphRef}
                    className={
                      testToggle ? "about__text--active" : "about__text"
                    }
                  >
                    {isDataVideo.material_data &&
                    isDataVideo.material_data.description
                      ? isDataVideo.material_data.description
                      : "Не найдено описание о фильме"}
                  </p>
                </TooltipComponent>

                <button
                  style={testToggle ? { bottom: "-25px" } : { bottom: "0px" }}
                  className="text--hidden"
                  onClick={() => setTextToggle(!testToggle)}
                >
                  <h2 className={!testToggle ? "text00" : "d-none"}>
                    Читать далее
                  </h2>
                  <h2 className={testToggle ? "text01" : "d-none"}>
                    Закрыть текст
                  </h2>
                </button>
              </div>
              <VideoActiors />
              {/* // <!-- Yandex.RTB R-A-3835914-7 --> */}
              <div id="yandex_rtb_R-A-3835914-7"></div>
            </div>

            <div className="Video__container">
              <div className="video__serials">
                {isDataVideo.last_episode ? (
                  <ResembleBlock title={"Похожие сериалы"} />
                ) : (
                  <RecomentionBlock />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoPlayer;
