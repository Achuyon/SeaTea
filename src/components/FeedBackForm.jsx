import { useState } from "react";
import emailjs from "emailjs-com";

export default function FeedbackForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.send(
            "service_ws6ws53",     // ID сервісу
            "template_ss2nmkh",    // ID шаблону
            formData,
            "tq7x7N3mZAwIXJROh"      // Public Key
        ).then(
            (result) => {
                
            },
            (error) => {
                alert("Помилка при надсиланні: " + error.text);
            }
        );
    };

    return (
        <section className="feedback-form">
            <h2>ЗВОРОТНІЙ ЗВ'ЯЗОК</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Ваше ім’я"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Ваш email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                <textarea
                    name="message"
                    placeholder="Ваше повідомлення"
                    value={formData.message}
                    onChange={handleChange}
                    required
                />
                <button type="submit">Надіслати</button>
            </form>
        </section>
    );
}
