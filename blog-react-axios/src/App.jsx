import Navbar from "./components/Navbar";

// componente que faz o controle das rotas será chamado dentro de app
// sinalizando as rotas declaradas e configuradas no main.jsx
import { Outlet } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
