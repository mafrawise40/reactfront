
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Galeria from "./components/galeria/Galeria";

const AppRoutes = () => {
    return (
        <Routes>

            <Route Component={Galeria} path="/sobre" />
        </Routes>
    )
}

export default AppRoutes;