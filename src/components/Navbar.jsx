import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar({ favoriteCount }) {
    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <NavLink to="/">
                    <span className="logo-icon">🎬</span> Movie Explorer
                </NavLink>
            </div>
            <div className="navbar-links">
                <NavLink to="/" end className="nav-link">
                    Home
                </NavLink>
                <NavLink to="/favorites" className="nav-link">
                    Favorites
                    {favoriteCount > 0 && (
                        <span className="fav-badge">{favoriteCount}</span>
                    )}
                </NavLink>
                <NavLink to="/about" className="nav-link">
                    About
                </NavLink>
            </div>
        </nav>
    );
}

export default Navbar;
