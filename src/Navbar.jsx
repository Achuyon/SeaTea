import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="navbar">
            <h1 className="logo">SeaTea</h1>
            <ul>
                <li><Link to="/">s</Link></li>
                <li><Link to="/about">s</Link></li>
                <li><Link to="/products">s</Link></li>
                <li><Link to="/production">s</Link></li>
                <li><Link to="/contact">s</Link></li>
            </ul>
        </nav>
    );
}
