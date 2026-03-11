import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Login.css";

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        // Email validation
        if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/.test(email)) {
            setError("Enter valid email address");
            return;
        }

        // Password validation
        if (!/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&.])[A-Za-z\d@$!%*#?&.]{6,}$/.test(password)) {
            setError("Password must contain letter, number and special character");
            return;
        }
    

        setError("");
        alert("Login Successful");

    };

    return (

        <div className="login">

            <h2>Login</h2>

            <form onSubmit={handleSubmit}>

                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button type="submit">Login</button>

                {error && <p className="error">{error}</p>}

                <p>
                    Don't have account? <Link to="/register">Register</Link>
                </p>

            </form>

        </div>

    )

}

export default Login