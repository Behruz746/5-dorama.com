import { NavLink, Outlet } from "react-router-dom"; 

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
      </main>
    </>
  );
}

export default RootLeyout;
