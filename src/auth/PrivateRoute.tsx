import { Navigate } from "react-router-dom";
// import jwt from "jsonwebtoken";

export const PrivateRoute = ({ children }: { children: JSX.Element }) => {
    const token = localStorage.getItem("@App:token");
    return token !== null ? children : <Navigate to="/login" />;
}