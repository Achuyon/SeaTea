import { Link } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <nav className="navbar">
            <h1 className="logo">
                <Link to="/"><img src="/images/logo.png" alt="Logo" /></Link>
            </h1>

            <div className="menu-wrapper">
                <button
                    className="menu-btn"
                    onClick={() => setOpen(!open)}
                >
                    Меню ☰
                </button>

                <ul className={`menu ${open ? "show" : ""}`}>
                    <li><Link to="/" onClick={() => setOpen(false)}>Головна</Link></li>
                    <li><Link to="/about" onClick={() => setOpen(false)}>Про нас</Link></li>
                    <li><Link to="/products" onClick={() => setOpen(false)}>Продукція</Link></li>
                    <li><Link to="/production" onClick={() => setOpen(false)}>Виробництво</Link></li>
                    <li><Link to="/contact" onClick={() => setOpen(false)}>Контакти</Link></li>
                </ul>
            </div>
        </nav>
    );

}
