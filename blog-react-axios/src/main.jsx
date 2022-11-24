import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// import das bibliotecas para criação das Rotas
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";

// importando os componentes - Páginas
import Home from "./routes/Home";
import NewPost from "./routes/NewPost";

import "./index.css";

// Array de Objetos com a configuração das rotas
const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/new",
        element: <NewPost />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* chamada do array de objetos router onde se encontra o <App /> e os demais elementos da rota */}
    <RouterProvider router={router} />
  </React.StrictMode>
);
