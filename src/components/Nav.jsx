import { NavLink } from "react-router-dom";
import "../css/Nav.css"

function Nav() {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/produtos">Produtos</NavLink>
      <NavLink to="/sobre">Sobre</NavLink>
    </nav>
  );
}

export default Nav;