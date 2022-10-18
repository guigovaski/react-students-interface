import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as S from "./styles";
import { Token } from "./types";
import { authenticate } from "../../services/api";
import { ErrorBox } from "../../components/global/Error/Validation/Validation";
import { AiFillCloseCircle } from "react-icons/ai";

export const Login = () => {
    const [userEmail, setUserEmail] = useState("");
    const [password, setPasword] = useState("");
    const [error, setError] = useState("");
    const [errorAlert, setErrorAlert] = useState("");

    const navigate = useNavigate();

    const handleLogin = async () => {
        if (!userEmail || !password) {
            setError("Field is required");
            return;
        }

        try {
            const res: Token = await authenticate(userEmail, password);
    
            localStorage.setItem("@App:token", res.token);
            localStorage.setItem("@App:token_expiration", res.expiration);
            
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
                <h1>Login</h1>
                <div className="form-login">
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" value={userEmail} onChange={(e) => setUserEmail(e.target.value)} />
                    <span className="error-validation">
                        {!userEmail && error ? error : ""}
                    </span>

                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" value={password} onChange={(e) => setPasword(e.target.value)} />
                    <span className="error-validation">
                        {!password && error ? error : ""}
                    </span>

                    <span>Não tem uma conta? <strong><Link to="/register">Registre-se</Link></strong></span>
                    <button onClick={handleLogin}>Entrar</button>
                </div>
            </S.Container>
        </S.Wrapper>
    );
}