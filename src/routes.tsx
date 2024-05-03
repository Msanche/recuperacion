import App from "./App";
import SwrComponent from "./Mecanismos/SWR"; // Importa el componente SwrComponent

const routes = [
    {
        path: "/swr", // Asegúrate de que la ruta coincida con la que intentas navegar
        element: <SwrComponent />, // Renderiza el componente SwrComponent
      },
  {
    path: "/",
    element: <App />,
  },
];

export default routes;
