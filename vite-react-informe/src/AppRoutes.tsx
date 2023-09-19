
import { RouterProvider } from "react-router-dom";
import { createBrowserRouter } from 'react-router-dom';
import Galeria from "./components/views/galeria/Galeria";
import GaleriaPessoa from "./components/views/galeria/GaleriaPessoa";
import Dashboard from "./components/views/dashboard/Dashboard";



const router = createBrowserRouter([
    {
        path: "/",
        element: <div>HOME - PAGE !</div>,
    },
    {
        path: "/galeria",
        element: <Galeria />,
    },
    {
        path: "/galeria/pessoas",
        element: <GaleriaPessoa />
    },
    {
        path: "/dashboard",
        element: <Dashboard />
    }
]);



export default function AppRoutes() {

    return (
        <RouterProvider router={router} />
    );
}

