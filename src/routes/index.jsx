import { useRoutes } from "react-router-dom";
import { ROUTES } from "../Constants/routes.jsx";
import MainLayout from "../Layouts/mainLayout";
import Home from "../Components/Home/index.jsx";
const AppRoutes = () => {
  return useRoutes([
    {
      path: ROUTES.HOME,
      element: (
        <MainLayout>
          <Home />
        </MainLayout>
      ),
    },
  ]);
};

export default AppRoutes;
