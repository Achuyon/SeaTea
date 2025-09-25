import "../assets/about.css";

export default function About() {
    const team = [
        { id: 1, name: "Іван Коваленко", role: "Засновник", img: "../images/team1.png" },
        { id: 2, name: "Олена Петрівна", role: "Технолог", img: "../images/team2.png" },
        { id: 3, name: "Марко Левицький", role: "Майстер чаю", img: "../images/team3.png" },
    ];

    const values = [
        { id: 1, title: "Органічні інгредієнти", desc: "Використовуємо лише сертифіковані трави з Карпат." },
        { id: 2, title: "Відповідальне виробництво", desc: "Технології без шкоди для природи." },
        { id: 3, title: "Підтримка локальних фермерів", desc: "Сприяємо розвитку регіональних громад." },
    ];

    return (
        <section className="about">
            {/* Герой */}
            <div className="about-hero">
                <h1>Про нас</h1>
                <p>Органічний чай від SeaTea для сучасних людей, котрі цінують здоров’я та смак.</p>
            </div>

            {/* Історія */}
            <div className="about-history">
                <h2>НАША ІСТОРІЯ</h2>
                <p>
                    SeaTea заснований на основі любові до природи та турботи про користь чаю.
                    Ми відбираємо лише найкраще листя кипрію з Карпатських гір, щоб кожна чашка дарувала здоров’я і насолоду.
                </p>
            </div>

            {/* Команда */}
            <div className="about-team">
                <h2>НАША КОМАНДА</h2>
                <div className="team-cards">
                    {team.map(member => (
                        <div key={member.id} className="team-card">
                            <img src={member.img} alt={member.name} />
                            <h3>{member.name}</h3>
                            <p>{member.role}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Цінності */}
            <div className="about-values">
                <h2>НАШІ ЦІННОСТІ</h2>
                <div className="values-cards">
                    {values.map(v => (
                        <div key={v.id} className="value-card">
                            <h3>{v.title}</h3>
                            <p>{v.desc}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* CTA */}
            <div className="about-cta">
                <a href="/products" className="btn">Перейти до продукції</a>
            </div>
        </section>
    );
}
