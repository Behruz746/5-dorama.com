import { useContext, useEffect, useState } from "react";
import AppContext from "../AppContext";
import { useLocation } from "react-router-dom";
import { NavLink } from "react-router-dom";
import axios from "axios";

function VideoPlayer() {
  const { isVideoLink } = useContext(AppContext);
  const location = useLocation().pathname.slice(7);
  const [isDataVideo, setIsDataVideo] = useState([]);
  // console.log(location);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await axios.get(
          `https://kodikapi.com/search?token=7e04e50106ab3a654bef8c638ea36fa8&id=${location}&with_episodes=true&with_material_data=true`
        );
        setIsDataVideo(data.data.results[0]);
      } catch (error) {
        console.log("Error: 404;", error);
      }
    };
    fetchData();
  }, [location]);

  // console.log(location);

  return (
    <div className="VideoPlayer w-full">
      <div className="container">
        <iframe
          id="videoPage"
          className="videoPlayer"
          src={isDataVideo && isDataVideo.link}
          width="846px"
          height="476px"
          frameBorder="0"
          allowFullScreen
          allow="autoplay *; fullscreen *"
        ></iframe>

        <div className="VideoPlayer__content">
          <div className="VideoPlayer__content--row">
            <h1 className="VideoPlayer__title">{isDataVideo.title}</h1>
            <div className="VideoPlayer__videos">
              <button>Смотреть</button>
              <NavLink to="/">Трейлер</NavLink>
              <button>Кадры из фильмов</button>
            </div>
          </div>

          <div className="VideoPlayer__column">
            <div className="VideoPlayer__about">
              <div className="about__contetn">
                <h2 className="about__title">О фильме</h2>
                <p className="about__text">
                  {isDataVideo.material_data &&
                    isDataVideo.material_data.description}
                </p>
              </div>
            </div>
            <div className="about__image Card">
              <img
                src={
                  isDataVideo.material_data &&
                  isDataVideo.material_data.poster_url
                }
                alt="video image"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoPlayer;
