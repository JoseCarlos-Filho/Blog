// component Link que faz o gerenciamento e controle dos linkes clicaveis
// não precisando utilizar a tag <a> que pode ocasionar o reload da página
// a operação deve ser controlada pelo JavaScript
// O componente Navbar será importado dentro de App.jsx para utilização do mesmo.
import { Link } from "react-router-dom";

import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h2>
        {/* propriedade "to" seta a página home */}
        <Link to={`/`}>Blog</Link>
      </h2>
      <ul>
        <li>
          <Link to={`/`}>Home</Link>
        </li>
        <li>
          <Link to={`/new`} className="new-btn">
            Novo Post
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
