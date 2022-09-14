import { AuthRoutes } from "../auth/routes/AuthRoutes";
import { AppRoutes } from "../App/routes/AppRoutes"; 

import { Route, Routes } from "react-router-dom";

export const MainRouter = () => {
    return (
        <Routes>
        {/* Rutas para la autenticacion */}
        <Route path="auth/*" element= {<AuthRoutes />}/>

        {/* Rutas de la App */}
        <Route path="/*" element= {<AppRoutes />}/>
      </Routes>
    )
}