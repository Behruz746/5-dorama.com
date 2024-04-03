import React, { lazy, Suspense } from "react"
import { createRoot } from "react-dom"
const App = lazy(() => import("./App"))
import { ContextProvider } from "./context/ContextProvider"

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
)

createRoot(document.getElementById("root")).render(
  <ContextProvider>
    <React.StrictMode>
      <Suspense fallback={loadingMarkup}>
        <App />
      </Suspense>
    </React.StrictMode>
  </ContextProvider>
)
