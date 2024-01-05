import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./sass/main.scss";
import "react-lazy-load-image-component/src/effects/blur.css";

// Layout
import RootLeyout from "./layout/RootLeyout";
import RootPlayer from "./layout/RootPlayer";
import RootCategorys from "./layout/RootCategorys";
import RootMovies from "./layout/RootMovies";
import RootSerail from "./layout/RootSerail";

import Home from "./pages/Home";
import Shorts from "./pages/Shorts";
import Dramas from "./pages/Dramas";
import Movies from "./pages/Movies";
import Actor from "./pages/Actor";
import VideoPlayer from "./pages/VideoPlayer";
import Document from "./pages/Document";
import About from "./pages/About";
import Contact from "./pages/Contact";
import PageNotFound from "./pages/pageErrorFound/PageNotFound";
import PopularNow from "./pages/pageCategorys/PopularNow";
import NewMovies from "./pages/pageCategorys/NewMovies";
import AnimeMovie from "./pages/pageCategorys/AnimeMovie";

// Movies catigoriy pages
import ComedyMPage from "./pages/pageCategorys/moviePages/ComedyMPage";
import DramaMPage from "./pages/pageCategorys/moviePages/DramaMPage";
import ActionMPage from "./pages/pageCategorys/moviePages/ActionMPage";
import BiographyMPage from "./pages/pageCategorys/moviePages/BiographyMPage";
import MilitaryMPage from "./pages/pageCategorys/moviePages/MilitaryMPage";
import FantasticMPage from "./pages/pageCategorys/moviePages/FantasticMPage";
import HorrorMPage from "./pages/pageCategorys/moviePages/HorrorMPage";
import CrimeMPage from "./pages/pageCategorys/moviePages/CrimeMPage";
import AnimeMPage from "./pages/pageCategorys/moviePages/AnimeMPage";

// Serial catigoriy pages
import ComedySPage from "./pages/pageCategorys/serialPages/ComedySPage";
import DramaSPage from "./pages/pageCategorys/serialPages/DramaSPage";
import ActionSPage from "./pages/pageCategorys/serialPages/ActionSPage";
import BiographySPage from "./pages/pageCategorys/serialPages/BiographySPage";
import MilitarySPage from "./pages/pageCategorys/serialPages/MilitarySPage";
import FantasticSPage from "./pages/pageCategorys/serialPages/FantasticSPage";
import HorrorSPage from "./pages/pageCategorys/serialPages/HorrorSPage";
import CrimeSPage from "./pages/pageCategorys/serialPages/CrimeSPage";
import AnimeSPage from "./pages/pageCategorys/serialPages/AnimeSPage";

function App() {
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
    <div className="App">
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
