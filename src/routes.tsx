import { Routes, Route } from "react-router-dom";
import { PrivateRoute } from "./auth/PrivateRoute";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";

const MainRoutes = () => {
    return (
        <Routes>
            <Route index element={<PrivateRoute><Home /></PrivateRoute>} />
            <Route path="/login" element={<Login />} />        
            <Route path="/register" element={<Register />} />
        </Routes>
    );
}

export default MainRoutes;