import { NavLink, Outlet } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import { useContext } from "react";

// Components
import Header from "../components/Header/Header";
import Menu from "../components/Menu/Menu";
import Modal from "../components/Modal/Modal";
import AppContext from "../AppContext";
import MenuMobile from "../components/MenuMobile/MenuMobile";

function RootLeyout() {
  const { modalSec } = useContext(AppContext);

  return (
    <>
      <Header />
      <main>
        <Modal />
        <Menu />
        <Outlet />
      </main>
      {/* <div className="test--block">
        <p>Запущен в тестовом режиме на нашей платформе!</p>
        <p>Запущен в тестовом режиме на нашей платформе!</p>
        <p>Запущен в тестовом режиме на нашей платформе!</p>
      </div> */}
      <MenuMobile />
      <Analytics />
    </>
  );
}

export default RootLeyout;
