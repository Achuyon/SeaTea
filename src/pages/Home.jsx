import { Link } from "react-router-dom";
import { teaCards } from "../data/cards";
import FeedbackForm from "../components/FeedbackForm.jsx";
import "../assets/home.css";
import "../components/FeedBackForm.jsx";


export default function Home() {
    return (
        <div className="home">
            {/* Головний банер */}
            <section className="hero">
                <h1>Ласкаво просимо на Чайну Фабрику</h1>
                <p>
                    Ми спеціалізуємося на обробці та фасуванні натурального чаю.
                    Тільки найкращі листки, тільки справжній смак.
                </p>
                <a href="/products" className="btn">Переглянути продукцію</a>
            </section>

            {/* Блок переваг */}
            <section className="advantages">
                <h2>НАШІ ПЕРЕВАГИ</h2>

                <div className="adv-list">
                    <div className="adv-card">
                        <h3>🌱 Натуральність</h3>
                        <p>Використовуємо лише добірний чай без штучних домішок.</p>
                    </div>
                    <div className="adv-card">
                        <h3>🏭 Сучасне виробництво</h3>
                        <p>Фасування та обробка за міжнародними стандартами.</p>
                    </div>
                    <div className="adv-card">
                        <h3>🌍 Експорт</h3>
                        <p>Наш чай постачається у різні країни світу.</p>
                    </div>
                </div>
            </section>

            { /* Блок коротко про виробництво*/}
            <section className="p-eco">
                <div className="p-eco-info">
                    <h2>ЕКО ВИРОБНИЦТВО</h2>
                    <p>
                        Органічний чай від SeaTea для сучасних та енергійних людей, котрі піклуються про користь продуктів та цінують насичений смак чаю.
                    </p>
                    <p>
                        Чай виготовлено на основі кипрію, що відомий цілющими властивостями та збирається в екологічно чистому регіоні українських Карпат.
                    </p>
                    <Link to="/Production" className="more-link">Читати детальніше</Link>
                </div>
                
                <div className="sert">
                    <div className="img-sert">
                        <img src="images/organic-logo.svg"></img>
                        <p>UA–BIO–108

                        Агровиробництво України</p>
                    </div>
                        <h3>«Органік Стандарт»</h3>
                    <p>Чай має сертифікат європейського зразка. Щоб отримати дозвіл на таке маркування виробництво ретельно перевіряють, досліджують сировину та готову продукцію на відповідність еко стандартам</p>
                </div>
            </section>

            { /* Блок коротко продукція*/}
            <section className="products-short">
                <h2>НАША ПРОДУКЦІЯ</h2>

                {teaCards.slice(0, 5).map(card => (
                    <div key={card.id} className="products-short-card">
                        <img src={card.image} alt={card.name} />
                        <div className="products-short-info">
                            <h2>{card.name}</h2>
                            <p>{card.description}</p>
                            <Link to={card.link} className="more-link-btn">Дивитися всі</Link>
                        </div>
                    </div>
                ))}
            </section>
            <FeedbackForm />
        </div>
    );
}

