import { Navigate, Route, Routes } from "react-router-dom";
import { ClientsPage, CompanyPage, EmployeesPage, ExpensesPage, HomePage, IncomesPage, ProvidersPage } from "../pages";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="empresa" element={<CompanyPage />} />
      <Route path="empleados" element={<EmployeesPage />} />
      <Route path="proveedores" element={<ProvidersPage />} />
      <Route path="clientes" element={<ClientsPage />} />
      <Route path="gastos" element={<ExpensesPage />} />
      <Route path="ingresos" element={<IncomesPage />} />
      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  );
};
