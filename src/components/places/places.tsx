import React, { useState } from "react";
import type { Place } from "../../types";
import styles from "./places.module.css";
import { useTheme } from "../../contexts/ThemeContext";

interface PlacesProps {
  places: Place[];
}

const Places: React.FC<PlacesProps> = ({ places }) => {
  const dark = useTheme();
  const [sortAscending, setSortAscending] = useState<boolean>(true);
  const [filter, setFilter] = useState<"Всё" | "Набережная" | "Улица" | "Площадь">("Всё");

  const getAddressType = (address: string): string => {
    if (address.includes('наб.')) return 'Набережная';
    if (address.includes('ул.')) return 'Улица';
    if (address.includes('пл.')) return 'Площадь';
    return 'Другое';
  };

  const filteredPlaces = places.filter(place => {
    if (filter === 'Всё') return true;
    return getAddressType(place.address) === filter;
  });

  const sortedPlaces = [...filteredPlaces].sort((a, b) => {
    if (sortAscending) return a.name.localeCompare(b.name, 'ru');
    return b.name.localeCompare(a.name, 'ru');
  });

  return (
    <section className={`${styles.container} ${dark ? styles.dark : ''}`}>
      <h2>Места досуга</h2>
      <div className={styles.options}>
        <label>
          Сортировать по названию:
          <select value={sortAscending ? 'asc' : 'desc'} onChange={e => setSortAscending(e.target.value === 'asc')}>
            <option value="asc">А → Я</option>
            <option value="desc">Я → А</option>
          </select>
        </label>

        <label>
          Фильтр по адресу:
          <select value={filter} onChange={e => setFilter(e.target.value as 'Всё' | 'Набережная' | 'Улица' | 'Площадь')}>
            <option value="Всё">Все места</option>
            <option value="Набережная">Набережные</option>
            <option value="Улица">Улицы</option>
            <option value="Площадь">Площади</option>
          </select>
        </label>
      </div>

      <div className={styles.placesList}>
        {sortedPlaces.map(place => (
          <div key={place.id} className={styles.placeCard}>
            <h3>{place.name}</h3>
            <img src={`./public/Places/${place.pictureName}`} alt={place.name} />
            <p className={styles.address}>📍{place.address}</p>
            <p>{place.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Places;