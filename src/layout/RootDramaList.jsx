import { Outlet } from "react-router-dom";

function RootDramaList() {
  return (
    <div className="RootDramaList w-full page">
      <Outlet />
    </div>
  );
}

export default RootDramaList;
