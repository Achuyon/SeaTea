import React, { useState, useRef } from "react";
import { teaCards } from "../data/cards";

export default function TeaFilters({
    search,
    setSearch,
    filteredTeas,
    selectedCategories,
    selectedTypes,
    selectedOrigins,
    selectedRatings,
    priceMin,
    priceMax,
    categories,
    types,
    origins,
    handleCategoryChange,
    handleTypeChange,
    handleOriginChange,
    handleRatingChange,
    handleMinPriceChange,
    handleMaxPriceChange,
}) {
    const [isOpen, setIsOpen] = useState(true); // стан відкриття/закриття панелі
    const fltrRef1 = useRef(null);

    const toggleFltr1 = () => {
        setIsOpen(!isOpen);
    };

    return (
        <aside
            className={`sidebar-filter ${isOpen ? "open" : "closed"}`}
            ref={fltrRef1}
        >
            <div className="fltrHead">
                <h4>Фільтр</h4>
                <button className="close" onClick={toggleFltr1}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 50 50"
                    >
                        <path d="M 9.15625 6.3125 L 6.3125 9.15625 L 22.15625 25 L 6.21875 40.96875 L 9.03125 43.78125 L 25 27.84375 L 40.9375 43.78125 L 43.78125 40.9375 L 27.84375 25 L 43.6875 9.15625 L 40.84375 6.3125 L 25 22.15625 Z"></path>
                    </svg>
                </button>
            </div>

            <div className="fltrs">
                {isOpen && (
                    <>
                        {/* Пошук по назві */}
                        <div className="fltrpath">
                            <h5>Пошук</h5>
                            <input
                                type="text"
                                placeholder="Пошук чаю..."
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                            />
                        </div>

                        {/* Категорії */}
                        <div className="fltrpath">
                            <h5>Категорії</h5>
                            {categories.map((category) => (
                                <label key={category} className="checkbox-label">
                                    <input
                                        type="checkbox"
                                        checked={selectedCategories.includes(category)}
                                        onChange={() => handleCategoryChange(category)}
                                    />
                                    {category}
                                </label>
                            ))}
                        </div>

                        {/* Тип */}
                        <div className="fltrpath">
                            <h5>Тип</h5>
                            {types.map((type) => (
                                <label key={type} className="checkbox-label">
                                    <input
                                        type="checkbox"
                                        checked={selectedTypes.includes(type)}
                                        onChange={() => handleTypeChange(type)}
                                    />
                                    {type}
                                </label>
                            ))}
                        </div>

                        {/* Походження */}
                        <div className="fltrpath">
                            <h5>Походження</h5>
                            {origins.map((origin) => (
                                <label key={origin} className="checkbox-label">
                                    <input
                                        type="checkbox"
                                        checked={selectedOrigins.includes(origin)}
                                        onChange={() => handleOriginChange(origin)}
                                    />
                                    {origin}
                                </label>
                            ))}
                        </div>

                        {/* Рейтинг */}
                        <div className="fltrpath">
                            <h5>Рейтинг</h5>
                            {[10, 9, 8, 7, 6, 5].map((rating) => (
                                <label key={rating} className="checkbox-label">
                                    <input
                                        type="checkbox"
                                        checked={selectedRatings.includes(rating)}
                                        onChange={() => handleRatingChange(rating)}
                                    />
                                    {rating}+
                                </label>
                            ))}
                        </div>

                        {/* Діапазон цін */}
                        <div className="fltrpath">
                            <h5>Ціна (грн)</h5>
                            <div
                                style={{
                                    display: "flex",
                                    gap: "10px",
                                    marginBottom: "10px",
                                }}
                            >
                                <input
                                    type="number"
                                    min="0"
                                    value={priceMin}
                                    onChange={handleMinPriceChange}
                                    style={{ width: "100%" }}
                                />
                                <input
                                    type="number"
                                    min="0"
                                    value={priceMax}
                                    onChange={handleMaxPriceChange}
                                    style={{ width: "100%" }}
                                />
                            </div>
                        </div>
                    </>
                )}
            </div>
        </aside>
    );
}
