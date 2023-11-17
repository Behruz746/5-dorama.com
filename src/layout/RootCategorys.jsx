import { Outlet } from "react-router-dom";

function RootCategorys() {
  return (
    <div className="RootCategorys w-full page">
      <Outlet />
    </div>
  );
}

export default RootCategorys;
