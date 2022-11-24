import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// import das bibliotecas para criação das Rotas
import { createrBrowserRoute, RouterProvider, Route } from "react-router-dom";

import "./index.css";

// Array de Objetos com a configuração das rotas
const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
      },
      {
        path: "/new",
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
