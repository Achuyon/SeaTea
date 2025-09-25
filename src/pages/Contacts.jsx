import "../assets/contacts.css";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaInstagram, FaTelegramPlane } from "react-icons/fa";

const TeaVideo = () => {
    return (
        <div style={{ position: "relative", paddingBottom: "56.25%", height: 0, overflow: "hidden" }}>
            <iframe
                src="https://www.youtube.com/embed/Yx8EmMuMjgM"
                title="Процес виробництва чаю"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{ position: "absolute", top: 50, left: 0, width: "100%", height: "100%" }}
            />
        </div>
    );
};


export default function Contacts() {
    return (
        <section className="contacts">
            <h2>Контакти</h2>

            <div className="contact-cards">
                <div className="contact-card">
                    <FaPhone className="icon" />
                    <h3>Телефон</h3>
                    <p>+380 99 123 45 67</p>
                    <p>+380 68 765 43 21</p>
                </div>

                <div className="contact-card">
                    <FaEnvelope className="icon" />
                    <h3>Email</h3>
                    <p>info@seatea.com</p>
                </div>

                <div className="contact-card">
                    <FaMapMarkerAlt className="icon" />
                    <h3>Адреса</h3>
                    <p>вул. Карпатська 12, с. Пилипець, Україна</p>
                </div>

                <div className="contact-card">
                    <h3>Ми у соцмережах</h3>
                    <div className="socBtns">
                    <a href="/products" className="btn"><p><FaInstagram className="icon" /></p> Instagram </a>
                    <a href="/products" className="btn"><p><FaFacebookF className="icon" /></p> FaceBook </a>
                    <a href="/products" className="btn"><p><FaTelegramPlane className="icon" /></p> Telegram </a>
                    </div>
                </div>

                <div className="contact-card">
                    <h3>Графік роботи</h3>
                    <p>Пн-Пт: 9:00 - 18:00</p>
                    <p>Сб-Нд: 10:00 - 16:00</p>
                </div>
            </div>
            <h2 style={{marginBottom:0,marginTop: 50}}>Як це готується: Чай</h2>
            <TeaVideo />
        </section>
    );
}
