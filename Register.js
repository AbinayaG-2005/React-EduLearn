import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Register.css";

function Register() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [mobile, setMobile] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        // Name validation
        if (!/^[A-Za-z ]+$/.test(name)) {
            setError("Name should contain only letters");
            return;
        }

        // Email validation
        if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/.test(email)) {
            setError("Enter valid email address");
            return;
        }
       
        // Already registered check
        const savedUser = localStorage.getItem(email);

        if (savedUser) {
            setError("User already registered");
            return;
        }

        // Mobile validation
        if (!/^[0-9]+$/.test(mobile)) {
            setError("Mobile number must contain only numbers");
            return;
        }

        if (mobile.length !== 10) {
            setError("Mobile number must be 10 digits");
            return;
        }

        // Password validation
        if (password.length < 6) {
            setError("Password must be at least 6 characters");
            return;
        }

        if (password !== confirmPassword) {
            setError("Passwords do not match");
            return;
        }
        
        localStorage.setItem(email, JSON.stringify({
            name,
            email,
            mobile,
            password
        }));

        setError("");
        alert("Registration Successful");
    };

    return (
        <div className="register">

            <h2>Register</h2>

            <form onSubmit={handleSubmit}>

                <input
                    type="text"
                    placeholder="Full Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <input
                    type="text"
                    placeholder="Mobile Number"
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                />

                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <input
                    type="password"
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />

                <button type="submit">Register</button>

                {error && <p className="error">{error}</p>}

                <p>
                    Already have account? <Link to="/login">Login</Link>
                </p>

            </form>

        </div>

    )

}

export default Register;