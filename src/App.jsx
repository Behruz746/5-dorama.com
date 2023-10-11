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
import PageNotFound from "./pages/pageErrorFound/PageNotFound";

function App() {
  const [isData, setIsData] = useState([]);
  const [isToggle, setIsToggle] = useState(true);

  console.log(isData);

  // useEffect(() => {
  //   const fetchData = async ()=> {
  //     try {
  //       const data = await axios.get('https://kodik.cc/video/93/2fc1d3b9759726b2bc5b104b225d2b4a/720p?geoblock=RU');
  //       setIsData(data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }
  //   fetchData();
  // }, []);

  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLeyout />}>
        <Route index element={<Home />} />
        <Route path="shorts" element={<Shorts />} />
        <Route path="dramas" element={<Dramas />} />
        <Route path="filems" element={<Filems />} />
        <Route path="actor" element={<Actor />} />

        {/* Error page: 404 :(+ */}
        <Route path="*" element={<PageNotFound />} />
      </Route>
    )
  );

  return (
    <AppContext.Provider value={{ isData, isToggle, setIsToggle }}>
      <div className="App">
        <RouterProvider router={routes} />
      </div>
    </AppContext.Provider>
  );
}

export default App;
