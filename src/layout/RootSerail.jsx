import { Outlet } from "react-router-dom";

function RootSerail() {
  return (
    <div className="RootMovies w-full page">
      <Outlet />
    </div>
  );
}

export default RootSerail;
