import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";

import "./sass/default.scss";

// Hooks
import { useState, useEffect } from "react";

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
  const [isLoad, setIsLoad] = useState(false);
  const [isVideoLink, setIsVideoLink] = useState("");
  const [dataList, setDataList] = useState([]);
  const [dataLength, setDataLength] = useState(0);

  useEffect(() => {
    const fetchList = async () => {
      try {
        setIsLoad(false);
        const dataList = await axios.get(
          "https://kodikapi.com/list?token=7e04e50106ab3a654bef8c638ea36fa8&with_episodes=true&with_material_data=true&limit=20&lgbt=false&types=foreign-serial"
        );
        setDataList(dataList.data.results);
        setIsLoad(true);
      } catch (error) {
        console.log(error);
      }
    };

    fetchList();
  }, []);
  
  // console.log(dataList);

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
        isToggle,
        setIsToggle,
        isVideoLink,
        setIsVideoLink,
        dataLength,
        setDataLength
      }}
    >
      <div className="App">
        {/* <div className=""></div> */}
        <RouterProvider router={routes} />
      </div>
    </AppContext.Provider>
  );
}

export default App;
