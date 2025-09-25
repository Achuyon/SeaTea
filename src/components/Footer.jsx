import { Link } from "react-router-dom";

export default function MyFooter() {
    return (
        <footer className="footer">
            <p className="footer-copy">© 2025 SeaTea. Dviniannikov</p>
            <div className="footer-contacts">
                <a href="mailto:info@molfar.com">info@seatea.com</a>
                <a href="tel:+380123456789">+38 (012) 345-67-89</a>
            </div>
        </footer>
    );
}
