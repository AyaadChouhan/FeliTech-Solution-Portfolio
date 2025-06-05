import { useRoutes } from "react-router-dom";
import { ROUTES } from "../Constants/routes.jsx";
import MainLayout from "../Layouts/mainLayout";
import Home from "@components/Home/index";
import Contact from "@components/Contact/index";
import About from "@components/About/index";
import WebService from "@components/WebService/index";
import SoftwareServices from "@components/SoftwareService/index";
import OurClients from "@components/OurClients/index";
import OurProjects from "@components/OurProjects/index";

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
    {
      path: ROUTES.OURPROJECTS,
      element: (
        <MainLayout>
          <OurProjects />
        </MainLayout>
      ),
    },
    {
      path: ROUTES.OURCLIENTS,
      element: (
        <MainLayout>
          <OurClients />
        </MainLayout>
      ),
    },
    {
      path: ROUTES.SOFTWARESERVICES,
      element: (
        <MainLayout>
          <SoftwareServices />
        </MainLayout>
      ),
    },
    {
      path: ROUTES.CONTACT,
      element: (
        <MainLayout>
          <Contact />
        </MainLayout>
      ),
    },
    {
      path: ROUTES.ABOUT,
      element: (
        <MainLayout>
          <About />
        </MainLayout>
      ),
    },
    {
      path: ROUTES.WEBSERVICE,
      element: (
        <MainLayout>
          <WebService />
        </MainLayout>
      ),
    },
  ]);
};

export default AppRoutes;
