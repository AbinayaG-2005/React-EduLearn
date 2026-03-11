import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav>
            <img src={logo} alt="logo" className="logo" />

            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/register">Register</Link></li>
                <li><Link to="/login">Login</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;
