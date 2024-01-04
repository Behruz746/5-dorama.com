import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom";
const App = lazy(() => import("./App"));
import { registerLicense } from "@syncfusion/ej2-base";

registerLicense(
  "Ngo9BigBOggjHTQxAR8/V1NAaF5cWWJCf0x0R3xbf1x0ZFZMY1pbRnFPMyBoS35RdURhW3xedHVUR2hcUUd0"
);

const loadingMarkup = (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "100%",
      height: "100vh",
      position: "absolute",
      top: 0,
      left: 0,
      backgroundColor: "#0e1621",
      zIndex: -1,
    }}
  >
    <img
      src="https://i.imgur.com/Dd2VZXB.png"
      width="150px"
      height="50px"
      alt="loading..."
    />
  </div>
);

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={loadingMarkup}>
      <App />
    </Suspense>
  </React.StrictMode>,
  document.getElementById("root")
);
