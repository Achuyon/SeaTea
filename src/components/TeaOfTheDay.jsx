import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/teaoftheday.css';
import { teaCards } from "../data/cards";

const TeaOfTheDay = () => {
    const [tea, setTea] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const randomTea = teaCards[Math.floor(Math.random() * teaCards.length)];
        setTea(randomTea);
    }, []);

    if (!tea) return null;

    const handleClick = () => {
        navigate(`/products/${tea.id}`);
    };

    return (
        <div className="tea-widget" onClick={handleClick} style={{ cursor: "pointer" }}>
            <h2>Чай дня</h2>
            <img src={tea.image} alt={tea.name} className="tea-image" />
            <h3>{tea.name}</h3>
            <p>{tea.description}</p>
        </div>
    );
};

export default TeaOfTheDay;
