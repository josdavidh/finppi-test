// import { Link } from "react-router-dom";

import { MenuOutlined } from "@mui/icons-material";
import { AppBar, IconButton, Toolbar } from "@mui/material";

export const NavBar = ({ dareWidth = 240}) => {
  return (
    <AppBar
      position="fixed"
      sx={{
        width: { sm: `calc(100% - ${ dareWidth })px` },
        ml: { sm: `${dareWidth}px`}
      }}
    >
      <Toolbar>
        <IconButton>
          <MenuOutlined />
        </IconButton>
      </Toolbar>

    </AppBar>
  );
};






// {/* <ul className="nav__links">
// <Link to="login">Login</Link>
// <Link to="/">Home</Link>
// <Link to="empresa">Mi empresa</Link>
// <Link to="empleados">Mis Empleados</Link>
// <Link to="proveedores">Provedores</Link>
// <Link to="clientes">Clientes</Link>
// <Link to="gastos">Gastos</Link>
// <Link to="ingresos">Ingresos</Link>
// </ul> */}