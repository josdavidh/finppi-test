import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <ul className="nav__links">
        <Link to="login">Login</Link>
        <Link to="/">Home</Link>
        <Link to="empresa">Mi empresa</Link>
        <Link to="empleados">Mis Empleados</Link>
        <Link to="proveedores">Provedores</Link>
        <Link to="clientes">Clientes</Link>
        <Link to="gastos">Gastos</Link>
        <Link to="ingresos">Ingresos</Link>
    </ul>
  );
};
