import "../assets/contacts.css";

export default function AboutDev() {
    return (
        <section className="contacts">
            <h2>ПРО РОЗРОБНИКА</h2>

            <div className="contact-cards">
                <div className="contact-card">
                    <img
                        src="/images/dev-avatar.jpg"
                        alt="Розробник"
                        style={{ width: "150px", height: "150px", borderRadius: "50%" }}
                    />
                    <h3>Назар</h3>
                    <p>Студент, веб-розробник. Працюю з React, створюю сучасні інтерфейси та веб-додатки.</p>
                    <p>Група ПП-24</p>
                </div>
                
            </div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
        </section>
    );
}
