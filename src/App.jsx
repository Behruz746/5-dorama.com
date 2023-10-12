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
  const [isToggle, setIsToggle] = useState(true);
  const [isData, setIsData] = useState([]);
  const [isLoad, setIsLoad] = useState(false);

  useEffect(() => {
    const fetchFun = async () => {
      try {
        setIsLoad(false);
        const data = await axios.get('https://kodikapi.com/genres?token=7e04e50106ab3a654bef8c638ea36fa8&types=anime-serial')
        setIsData(data.data.results
          );
        setIsLoad(true);
      } catch (error) {
        console.log(error, 'Error: 404');
      }
    };
  
    fetchFun();
  }, []);

  console.log(isData);
  console.log(isLoad);

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
        {/* <div className=""></div> */}
        <RouterProvider router={routes} />
      </div>
    </AppContext.Provider>
  );
}

export default App;
