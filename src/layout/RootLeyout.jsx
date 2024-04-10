import { useEffect } from "react"
import { Outlet } from "react-router-dom"
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/react"

// Components
import Header from "../components/Header"
import Menu from "../components/Menu"
import MenuMobile from "../components/MenuMobile"

function RootLeyout() {
  return (
    <>
      <Header />
      <main id="main">
        <Menu />
        <Outlet />
      </main>
      <SpeedInsights url="https://www.5dorama.online/" />
      <Analytics />
      <MenuMobile />
      <div className="menu__mobile--clone"></div>
    </>
  )
}

export default RootLeyout
