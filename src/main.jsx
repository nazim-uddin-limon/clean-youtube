import React from "react";
import ReactDOM from "react-dom/client";
import { StoreProvider } from "easy-peasy";
import { RouterProvider } from "react-router-dom";

import "./index.css";
import router from "./router/index.jsx";
import store from "./store/index.js";
import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <StoreProvider store={store}>
      <App />
      <RouterProvider router={router}></RouterProvider>
    </StoreProvider>
  </React.StrictMode>
);
