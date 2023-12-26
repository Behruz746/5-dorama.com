import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { SpeedInsights } from "@vercel/speed-insights/react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SpeedInsights>
      <App />
    </SpeedInsights>
  </React.StrictMode>
);
