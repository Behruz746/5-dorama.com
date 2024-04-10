import { Outlet } from "react-router-dom"

function RootMovies() {
  return (
    <div className="RootMovies w-full page">
      <Outlet />
    </div>
  )
}

export default RootMovies
