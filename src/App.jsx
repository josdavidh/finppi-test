import "./App.css";

// Enrutador principal
import { MainRouter } from "./router/mainRouter";

// Componentes necesarios
import { NavBar } from "./components/navBar/index.jsx";


// Tema de la pagina
import { AppTheme } from "./theme/AppTheme";

export const App = () => {
  return (
    <AppTheme>
      <NavBar />
      <MainRouter/>
    </AppTheme>
  );
};
