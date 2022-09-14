import { Route, Routes } from "react-router-dom";
import "./App.css";

// paginas de la aplicacion
import { HomePage } from "./pages/homePage/index.jsx";
import { LoginPage } from "./pages/loginPage/index.jsx";
import { CompanyPage } from "./pages/companyPage/index.jsx";
import { EmployeesPage } from "./pages/employeesPage/index.jsx";
import { ProvidersPage } from "./pages/providersPage/index.jsx";
import { ClientsPage } from "./pages/clientsPage/index.jsx";
import { ExpensesPage } from "./pages/expensesPage/index.jsx";
import { IncomesPage } from "./pages/incomesPage/index.jsx";

//componentes necesarios
import { NavBar } from "./components/navBar/index.jsx";

export const App = () => {
  return (
    <>
      <NavBar />

      <Routes>
        <Route path="login" element={<LoginPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="empresa" element={<CompanyPage />} />
        <Route path="empleados" element={<EmployeesPage />} />
        <Route path="proveedores" element={<ProvidersPage />} />
        <Route path="clientes" element={<ClientsPage />} />
        <Route path="gastos" element={<ExpensesPage />} />
        <Route path="ingresos" element={<IncomesPage />} />
      </Routes>
      
    </>
  );
};
