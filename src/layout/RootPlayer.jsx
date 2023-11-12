import { Outlet } from "react-router-dom";

function RootPlayer() {
  return (
    <div className="RootPlayer w-full page">
      <Outlet />
    </div>
  );
}

export default RootPlayer;
