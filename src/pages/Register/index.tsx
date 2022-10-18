import { useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { ErrorBox } from "../../components/global/Error/Validation/Validation";
import { register } from "../../services/api";
import { Token } from "../Login/types";
import * as S from "./styles";

export const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setconfirmPassword] = useState("");
    const [error, setError] = useState("");
    const [errorAlert, setErrorAlert] = useState("");

    const navigate = useNavigate();

    const handleRegister = async () => {
        if (!email || !password || !confirmPassword) {
            setError("Field is required");
            return;
        }

        try {
            const res: Token = await register(email, password, confirmPassword);
            
            localStorage.setItem("@App:token", res.token);
            localStorage.setItem("@App:expiration", res.expiration);
            
            navigate("/");
        } catch (err: any) {
            setErrorAlert(err.message);
        }
    }

    const handleCloseErrorAlert = () => {
        setErrorAlert("");
    }

    return (
        <S.Wrapper>
            {errorAlert && (
                <ErrorBox>
                    {errorAlert || "Something went wrong"}
                    <button onClick={handleCloseErrorAlert}>
                        <AiFillCloseCircle />
                    </button>
                </ErrorBox>
            )}
            <S.Container>
                <h1>Register</h1>
                <div className="form-register">
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <span className="error-validation">
                        {!email && error ? error : ""}
                    </span>

                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <span className="error-validation">
                        {!password && error ? error : ""}
                    </span>

                    <label htmlFor="confirm-password">Confirm Password:</label>
                    <input type="password" id="confirm-password" value={confirmPassword} onChange={(e) => setconfirmPassword(e.target.value)} />
                    <span className="error-validation">
                        {!confirmPassword && error ? error : ""}
                    </span>

                    <span>Já tem uma conta? <strong><Link to="/login">Fazer login</Link></strong></span>
                    <button onClick={handleRegister}>Registrar</button>
                </div>
            </S.Container>
        </S.Wrapper>
    );
}