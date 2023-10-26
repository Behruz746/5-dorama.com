import { NavLink, Outlet } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import { useContext } from "react";

// Components
import Header from "../components/Header/Header";
import Menu from "../components/Menu/Menu";
import Modal from "../components/Modal/Modal";
import AppContext from "../AppContext";

function RootLeyout() {
  const { modalSec } = useContext(AppContext);

  return (
    <>
      <Header />
      <main>
        {/* {modalSec && <Modal />}
        <Menu />
        <Analytics /> */}
        <Outlet />
      </main>
    </>
  );
}

export default RootLeyout;
