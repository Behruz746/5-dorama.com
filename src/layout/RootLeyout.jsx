import { NavLink, Outlet } from "react-router-dom"; 
import { Analytics } from '@vercel/analytics/react';

// Components
import Header from "../components/Header/Header";
import Menu from "../components/Menu/Menu";

function RootLeyout() {
  return (
    <>
      <Header />
      <main> 
        <Menu />
        <Outlet />
        <Analytics />
      </main>
    </>
  );
}

export default RootLeyout;
