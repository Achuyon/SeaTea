import React from "react";

export default function TeaSorting({ sortOption, setSortOption }) {
    return (
        <div className="sort-control">
            <label htmlFor="sortSelect">Сортувати:</label>
            <select id="sortSelect" onChange={(e) => setSortOption(e.target.value)} value={sortOption}>
                <option value="">-- Без сортування --</option>
                <option value="price-asc">Ціна: від найменшої</option>
                <option value="price-desc">Ціна: від найбільшої</option>
                <option value="rating-asc">Рейтинг: від найменшого</option>
                <option value="rating-desc">Рейтинг: від найбільшого</option>
            </select>
        </div>
    );
}
