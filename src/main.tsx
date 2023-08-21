import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { CardProviderComponent } from "./context/CardContext.tsx";
import "atropos/css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <CardProviderComponent>
      <App />
    </CardProviderComponent>
  </React.StrictMode>
);
