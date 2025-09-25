import React, { useState, useMemo } from "react";
import { useParams } from 'react-router-dom';
import TeaFilters from "../components/TeaFilters.jsx";
import TeaSorting from "../components/TeaSort.jsx";
import { teaCards } from "../data/cards.jsx";
import "../assets/products.css";

export default function Products() {
    // Стан для фільтрів
    const [search, setSearch] = useState("");
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [selectedTypes, setSelectedTypes] = useState([]);
    const [selectedOrigins, setSelectedOrigins] = useState([]);
    const [selectedRatings, setSelectedRatings] = useState([]);
    const [priceMin, setPriceMin] = useState(0);
    const [priceMax, setPriceMax] = useState(1000);
    const [selectedImage, setSelectedImage] = useState(null);
    const [sortOption, setSortOption] = useState("");
    const [showFilters, setShowFilters] = useState(false);


    // Отримуємо id з URL (для "Чаю дня")
    const { id } = useParams();
    const selectedTea = teaCards.find(tea => tea.id.toString() === id);

    // Унікальні значення для фільтрів
    const categories = useMemo(() => [...new Set(teaCards.map(card => card.category))], []);
    const types = useMemo(() => [...new Set(teaCards.map(card => card.type))], []);
    const origins = useMemo(() => [...new Set(teaCards.map(card => card.origin))], []);

    // Функції обробки фільтрів
    const handleCategoryChange = (category) => {
        setSelectedCategories(prev =>
            prev.includes(category)
                ? prev.filter(c => c !== category)
                : [...prev, category]
        );
    };
    const handleTypeChange = (type) => {
        setSelectedTypes(prev =>
            prev.includes(type) ? prev.filter(t => t !== type) : [...prev, type]
        );
    };
    const handleOriginChange = (origin) => {
        setSelectedOrigins(prev =>
            prev.includes(origin) ? prev.filter(o => o !== origin) : [...prev, origin]
        );
    };
    const handleRatingChange = (rating) => {
        setSelectedRatings(prev =>
            prev.includes(rating) ? prev.filter(r => r !== rating) : [...prev, rating]
        );
    };
    const handleMinPriceChange = (e) => setPriceMin(Number(e.target.value));
    const handleMaxPriceChange = (e) => setPriceMax(Number(e.target.value));

    // Фільтруємо чай
    const filteredTeas = teaCards.filter(card => {
        const matchSearch = card.name.toLowerCase().includes(search.toLowerCase());
        const matchCategory = selectedCategories.length === 0 || selectedCategories.includes(card.category);
        const matchType = selectedTypes.length === 0 || selectedTypes.includes(card.type);
        const matchOrigin = selectedOrigins.length === 0 || selectedOrigins.includes(card.origin);
        const matchRating = selectedRatings.length === 0 || selectedRatings.some(r => card.rating >= r);
        const matchPrice = card.price >= priceMin && card.price <= priceMax;

        return matchSearch && matchCategory && matchType && matchOrigin && matchRating && matchPrice;
    });


    const hasActiveFilters = selectedCategories.length > 0 ||
        selectedTypes.length > 0 ||
        selectedOrigins.length > 0 ||
        selectedRatings.length > 0 ||
        priceMin > 0 ||
        priceMax < 1000;

    const teasToShow = hasActiveFilters
        ? filteredTeas
        : selectedTea
            ? [selectedTea, ...filteredTeas.filter(t => t.id !== selectedTea.id)]
            : filteredTeas;

    const sortedTeas = [...teasToShow].sort((a, b) => {
        switch (sortOption) {
            case "price-asc":
                return a.price - b.price;
            case "price-desc":
                return b.price - a.price;
            case "rating-asc":
                return a.rating - b.rating;
            case "rating-desc":
                return b.rating - a.rating;
            default:
                return 0;
        }
    });
    return (
<div className="products-page">
            {/* Фільтр і сортування */}
            <div className="products-controls">
                <button className="filter-btn" onClick={() => setShowFilters(prev => !prev)}>Фільтр</button>
                <TeaSorting sortOption={sortOption} setSortOption={setSortOption} />
            </div>

            <div className="products-container">
                {/* Сайдбар */}
                {showFilters && (
                        <TeaFilters
                            search={search}
                            setSearch={setSearch}
                            filteredTeas={filteredTeas}
                            selectedCategories={selectedCategories}
                            selectedTypes={selectedTypes}
                            selectedOrigins={selectedOrigins}
                            selectedRatings={selectedRatings}
                            priceMin={priceMin}
                            priceMax={priceMax}
                            categories={categories}
                            types={types}
                            origins={origins}
                            handleCategoryChange={handleCategoryChange}
                            handleTypeChange={handleTypeChange}
                            handleOriginChange={handleOriginChange}
                            handleRatingChange={handleRatingChange}
                            handleMinPriceChange={handleMinPriceChange}
                            handleMaxPriceChange={handleMaxPriceChange}
                        />

                )}
                {/* Картки */}
                <div className="tea-cards">
                    {sortedTeas.map(card => (
                        <div key={card.id} className="tea-card">
                            <img
                                src={card.image}
                                alt={card.name}
                                onClick={() => setSelectedImage(card.image)}
                                className="clickable-img"
                            />
                            <h3>{card.name}</h3>
                            <p className="description">{card.description}</p>
                            <div className="tea-footer">
                                <p className="price">Ціна: {card.price} грн</p>
                                <p className="rate">Рейтинг: {card.rating}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {selectedImage && (
                <div className="modal" onClick={() => setSelectedImage(null)}>
                    <span className="close">&times;</span>
                    <img className="modal-content" src={selectedImage} alt="tea" />
                </div>
            )}
        </div>
    );
}
