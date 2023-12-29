import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

export const loadingMarkup = (
  <div className={`app--loading`}>
    <div className="loader"></div>
  </div>
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Suspense fallback={loadingMarkup}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Suspense>
);
