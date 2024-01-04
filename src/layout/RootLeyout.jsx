import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";

// Components
import Header from "../components/Header";
import Menu from "../components/Menu";
import Modal from "../components/Modal";
import MenuMobile from "../components/MenuMobile";

function RootLeyout() {
  useEffect(() => {
    window.yaContextCb.push(() => {
      Ya.Context.AdvManager.render({
        blockId: "R-A-3835914-6",
        renderTo: "yandex_rtb_R-A-3835914-6",
        type: "feed",
      });
    });
  }, []);

  return (
    <>
      <Header />
      <main id="main">
        <Modal />
        <Menu />
        <Outlet />
      </main>
      <SpeedInsights url="https://www.5dorama.online/" />
      <Analytics />
      <MenuMobile />
      <div className="menu__mobile--clone"></div>
    </>
  );
}

export default RootLeyout;
