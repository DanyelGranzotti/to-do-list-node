import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import RouterComponent from "./router.jsx";

import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";

import "./styles/global.css";
import "./styles/layout.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterComponent />
  </StrictMode>
);
