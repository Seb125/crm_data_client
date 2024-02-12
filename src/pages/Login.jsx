import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import authService from "../services/auth.service";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const navigate = useNavigate();

    const { storeToken, authenticateUser } = useContext(AuthContext);

    const handleLogin = (e) => {
        e.preventDefault();
        const requestBody = { email, password };

        authService
            .login(requestBody)
            .then((response) => {
                setError("");
                storeToken(response.data.authToken);
                authenticateUser();
                navigate("/");
            })
            .catch((error) => {
                const errorDescription = error.response.data.message;
                setError(errorDescription);
            });
    };


    return (
       <div className="center">
       <form onSubmit={handleLogin} className="loginForm">
        <label htmlFor="email" id="mail">Email</label>
        <input id="email" name="email" type="email" placeholder=" " value={email} onChange={(e) => setEmail(e.target.value)}/>
       
       <label htmlFor="password" id="pswd">Password</label>
       <input id="password" name="password" type="password" placeholder=" " value={password} onChange={(e) => setPassword(e.target.value)}/>
       {error && (
        <div>
            {error}
        </div>
       )}
       <button type="submit" id="button">Login</button>
       </form>
        </div>
    );
};

export default Login;