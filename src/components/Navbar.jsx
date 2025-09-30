import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Navbar() {
    const [open, setOpen] = useState(true);

    // При завантаженні сторінки перевіряємо ширину
    useEffect(() => {
        if (window.innerWidth <= 768) {
            setOpen(false); // на мобілках сховане
        }
    }, []);

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

                {/* додаємо "show" якщо меню відкрите */}
                <ul className={`menu ${open ? "show" : ""}`}>
                    <li><Link to="/" onClick={() => setOpen(true)}>Головна</Link></li>
                    <li><Link to="/about" onClick={() => setOpen(true)}>Про нас</Link></li>
                    <li><Link to="/products" onClick={() => setOpen(true)}>Продукція</Link></li>
                    <li><Link to="/production" onClick={() => setOpen(true)}>Виробництво</Link></li>
                    <li><Link to="/contact" onClick={() => setOpen(true)}>Контакти</Link></li>
                </ul>
            </div>
        </nav>
    );
}
