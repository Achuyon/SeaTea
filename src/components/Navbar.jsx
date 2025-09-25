import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="navbar">
            <h1 className="logo"><img src="images/logo.png"></img></h1>
            <ul>
                <li><Link to="/">Головна</Link></li>
                <li><Link to="/about">Про нас</Link></li>
                <li><Link to="/products">Продукція</Link></li>
                <li><Link to="/production">Виробництво</Link></li>
                <li><Link to="/contact">Контакти</Link></li>
            </ul>
        </nav>
    );
}
