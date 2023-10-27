import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";

import "./sass/default.scss";

// Hooks
import { useState, useEffect, useRef } from "react";

// Axios
import axios from "axios";

// Context
import AppContext from "./AppContext";

// Layout
import RootLeyout from "./layout/RootLeyout";

// Pages
import Home from "./pages/Home";
import Shorts from "./pages/Shorts";
import Dramas from "./pages/Dramas";
import Filems from "./pages/Filems";
import Actor from "./pages/Actor";
import VideoPlayer from "./pages/VideoPlayer";
import PageNotFound from "./pages/pageErrorFound/PageNotFound";

function App() {
  const [isToggle, setIsToggle] = useState(true);
  const [isLoad, setIsLoad] = useState(true);
  const [isVideoLink, setIsVideoLink] = useState("");
  const [dataList, setDataList] = useState([]);
  const [dataLength, setDataLength] = useState(0);
  const [isArrorToggle, setIsArrowToggle] = useState(false);
  const [modalSec, setModalSec] = useState(false);
  const searchvalue = useRef("");
  const [isSearchData, setIsDataSearch] = useState([]);
  const [toggleSeach, setToggleSeach] = useState(false);
  const [loadSearch, setLoadShearch] = useState(true);
  const [isUrl, setIsUrl] = useState(
    "https://kodikapi.com/search?token=7e04e50106ab3a654bef8c638ea36fa8&title="
  );

  useEffect(() => {
    const inputEl = document.querySelector("#inputEl");

    inputEl.addEventListener("change", (e) => {
      setIsUrl(
        `https://kodikapi.com/search?token=7e04e50106ab3a654bef8c638ea36fa8&title=${e.target.value}&with_material_data=true&lgbt=false&limit=15`
      );
      e.target.value ? setToggleSeach(true) : setToggleSeach(false);
      setLoadShearch(false);
    }); 
  }, []);

  useEffect(() => {
    const featchData = async () => {
      try {
        setLoadShearch(false);
        const data = await axios.get(isUrl);
        setIsDataSearch(data.data.results);
        setLoadShearch(true);
      } catch (error) {
        console.log("Error: 404;", error);
      }
    };
    featchData();
  }, [isUrl]);

  useEffect(() => {
    function handleResize() {
      if (window.screen.width <= 850) {
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

  console.log(loadSearch);
  console.log(isSearchData);
  console.log(isUrl);

  function ToggleHandel() {
    setIsArrowToggle(!isArrorToggle);
  }

  useEffect(() => {
    const time = 10000 * (6 * 5);

    setTimeout(() => {
      setModalSec(true);
      document.querySelector("body").style.overflow = "hidden";
    }, time);
  }, []);

  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLeyout />}>
        <Route index element={<Home />} />
        <Route path="shorts" element={<Shorts />} />
        <Route path="dramas" element={<Dramas />} />
        <Route path="filems" element={<Filems />} />
        <Route path="actor" element={<Actor />} />
        <Route path="video" element={<VideoPlayer />} />

        {/* Error page: 404 :(+ */}
        <Route path="*" element={<PageNotFound />} />
      </Route>
    )
  );

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
      }}
    >
      <div className="App">
        <RouterProvider router={routes} />
      </div>
    </AppContext.Provider>
  );
}

export default App;

import "./sass/mobile.scss";
