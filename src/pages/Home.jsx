import React from "react";

// Compoenents
import HaderPage from "../components/HeaderPage/HaderPage";
import Sliders from "../components/Sliders/Sliders";

function Home() {
  return (
    <div className="App__home w-full page">
      <HaderPage />
      <Sliders />
      <Sliders />
      <Sliders />
      <Sliders />
    </div>
  );
}

export default Home;
