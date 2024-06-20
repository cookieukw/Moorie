import { BrowserRouter as Browser, Route, Routes } from "react-router-dom";
import { setupIonicReact } from "@ionic/react";
import Home from "./screens/Home";
import Info from "./screens/Details";
import ReactDOM from "react-dom/client";
/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

setupIonicReact();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Browser>
    <Routes>
      <Route path="*" element={<Home />} />
      <Route path="/details/:id" element={<Info />} />
    </Routes>
  </Browser>
);
