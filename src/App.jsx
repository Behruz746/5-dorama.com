import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { lazy } from "react";

import "./sass/main.scss";
import "react-lazy-load-image-component/src/effects/blur.css";

// Hooks
import { useState, useEffect, useRef } from "react";

// Axios
import axios from "axios";

// Context
import AppContext from "./AppContext";

// Layout 
import RootLeyout from "./layout/RootLeyout";
import RootPlayer from "./layout/RootPlayer";
import RootCategorys from "./layout/RootCategorys";
import RootMovies from "./layout/RootMovies";
import RootSerail from "./layout/RootSerail";

const Home = lazy(() => import("./pages/Home"));
const Shorts = lazy(() => import("./pages/Shorts"));
const Dramas = lazy(() => import("./pages/Dramas"));
const Movies = lazy(() => import("./pages/Movies"));
const Actor = lazy(() => import("./pages/Actor"));
const VideoPlayer = lazy(() => import("./pages/VideoPlayer"));
const Document = lazy(() => import("./pages/Document"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const PageNotFound = lazy(() => import("./pages/pageErrorFound/PageNotFound"));
const PopularNow = lazy(() => import("./pages/pageCategorys/PopularNow"));
const NewMovies = lazy(() => import("./pages/pageCategorys/NewMovies"));
const AnimeMovie = lazy(() => import("./pages/pageCategorys/AnimeMovie"));

const ComedyMPage = lazy(() => import("./pages/pageCategorys/moviePages/ComedyMPage"));
const DramaMPage = lazy(() => import("./pages/pageCategorys/moviePages/DramaMPage"));
const ActionMPage = lazy(() => import("./pages/pageCategorys/moviePages/ActionMPage"));
const BiographyMPage = lazy(() => import("./pages/pageCategorys/moviePages/BiographyMPage"));
const MilitaryMPage = lazy(() => import("./pages/pageCategorys/moviePages/MilitaryMPage"));
const FantasticMPage = lazy(() => import("./pages/pageCategorys/moviePages/FantasticMPage"));
const HorrorMPage = lazy(() => import("./pages/pageCategorys/moviePages/HorrorMPage"));
const CrimeMPage = lazy(() => import("./pages/pageCategorys/moviePages/CrimeMPage"));
const AnimeMPage = lazy(() => import("./pages/pageCategorys/moviePages/AnimeMPage"));

const ComedySPage = lazy(() => import("./pages/pageCategorys/serialPages/ComedySPage"));
const DramaSPage = lazy(() => import("./pages/pageCategorys/serialPages/DramaSPage"));
const ActionSPage = lazy(() => import("./pages/pageCategorys/serialPages/ActionSPage"));
const BiographySPage = lazy(() => import("./pages/pageCategorys/serialPages/BiographySPage"));
const MilitarySPage = lazy(() => import("./pages/pageCategorys/serialPages/MilitarySPage"));
const FantasticSPage = lazy(() => import("./pages/pageCategorys/serialPages/FantasticSPage"));
const HorrorSPage = lazy(() => import("./pages/pageCategorys/serialPages/HorrorSPage"));
const CrimeSPage = lazy(() => import("./pages/pageCategorys/serialPages/CrimeSPage"));
const AnimeSPage = lazy(() => import("./pages/pageCategorys/serialPages/AnimeSPage"));

function App() {
  const [isToggle, setIsToggle] = useState(true);
  const [isLoad, setIsLoad] = useState(false);
  const [isVideoLink, setIsVideoLink] = useState("");
  const [dataList, setDataList] = useState([]);
  const [dataLength, setDataLength] = useState(0);
  const [isArrorToggle, setIsArrowToggle] = useState(false);
  const [modalSec, setModalSec] = useState(false);
  const searchvalue = useRef("");
  const [isSearchData, setIsDataSearch] = useState([]);
  const [isSearchDataId, setIsDataSearchId] = useState([]);
  const [toggleSeach, setToggleSeach] = useState(false);
  const [loadSearch, setLoadShearch] = useState(true);
  const [isUrl, setIsUrl] = useState(
    "https://kodikapi.com/search?token=7e04e50106ab3a654bef8c638ea36fa8&title="
  );
  const [inputToggle, setInputToggle] = useState(false);

  useEffect(() => {
    const inputEl = document.querySelectorAll(".inputEl");

    function ToggleEve() {
      setInputToggle(true);
    }

    inputEl.forEach((item) => {
      item.addEventListener("change", (e) => {
        setIsUrl(
          `https://kodikapi.com/search?token=7e04e50106ab3a654bef8c638ea36fa8&title=${e.target.value}&with_material_data=true&lgbt=false&limit=15`
        );
        setLoadShearch(false);

        e.target.value ? setToggleSeach(true) : setToggleSeach(false);
        !e.target.value
          ? (document.querySelector("body").style.overflow = "auto")
          : (document.querySelector("body").style.overflow = "hidden");
        e.target.value ? setInputToggle(true) : setInputToggle(false);
      });
    });
  }, []);

  useEffect(() => {
    const featchData = async () => {
      try {
        setLoadShearch(false);
        const data = await axios.get(isUrl);
        setIsDataSearch(data.data.results);
        setIsDataSearchId(data.data.results);
        setLoadShearch(true);
      } catch (error) {
        console.log("Error: 404;", error);
      }
    };
    featchData();
  }, [isUrl]);

  useEffect(() => {
    function handleResize() {
      if (window.screen.width <= 950) {
        setIsToggle(false);
      } else {
        setIsToggle(true);
      }
    }
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  function ToggleHandel() {
    setIsArrowToggle(!isArrorToggle);
  }

  const routes = createBrowserRouter([
    {
      path: "/",
      element: <RootLeyout />,
      children: [
        { index: true, element: <Home /> },
        { path: "shorts", element: <Shorts /> },
        { path: "actor", element: <Actor /> },
        { path: "documentation", element: <Document /> },
        { path: "about", element: <About /> },
        { path: "contact", element: <Contact /> },
        { path: "*", element: <PageNotFound /> },
        {
          path: "player",
          element: <RootPlayer />,
          children: [{ path: "video/:id", element: <VideoPlayer /> }],
        },
        {
          path: "dramas",
          element: <RootSerail />,
          children: [
            { index: true, element: <Dramas /> },
            { path: "comedy", element: <ComedySPage /> },
            { path: "drama", element: <DramaSPage /> },
            { path: "action", element: <ActionSPage /> },
            { path: "biography", element: <BiographySPage /> },
            { path: "military", element: <MilitarySPage /> },
            { path: "fantastic", element: <FantasticSPage /> },
            { path: "horror", element: <HorrorSPage /> },
            { path: "crime", element: <CrimeSPage /> },
            { path: "anime", element: <AnimeSPage /> },
          ],
        },
        {
          path: "movies",
          element: <RootMovies />,
          children: [
            { index: true, element: <Movies /> },
            { path: "comedy", element: <ComedyMPage /> },
            { path: "drama", element: <DramaMPage /> },
            { path: "action", element: <ActionMPage /> },
            { path: "biography", element: <BiographyMPage /> },
            { path: "military", element: <MilitaryMPage /> },
            { path: "fantastic", element: <FantasticMPage /> },
            { path: "horror", element: <HorrorMPage /> },
            { path: "crime", element: <CrimeMPage /> },
            { path: "anime", element: <AnimeMPage /> },
          ],
        },
        {
          path: "category-movies",
          element: <RootCategorys />,
          children: [
            { path: "popular-now", element: <PopularNow /> },
            { path: "new-movies", element: <NewMovies /> },
            { path: "anime", element: <AnimeMovie /> },
          ],
        },
      ],
    },
  ]);

  return (
    <AppContext.Provider
      value={{
        dataList,
        isLoad,
        setIsLoad,
        isToggle,
        setIsToggle,
        isVideoLink,
        setIsVideoLink,
        dataLength,
        setDataLength,
        isArrorToggle,
        setIsArrowToggle,
        ToggleHandel,
        modalSec,
        setModalSec,
        searchvalue,
        setIsUrl,
        isSearchData,
        setToggleSeach,
        toggleSeach,
        loadSearch,
        inputToggle,
        setInputToggle,
        isSearchDataId,
      }}
    >
      <div className="App">
        <RouterProvider router={routes} />
      </div>
    </AppContext.Provider>
  );
}

export default App;
