import React from "react";
import type { CityInfo } from "../../types";
import styles from "./information.module.css";
import { useTheme } from "../../contexts/ThemeContext";

interface InformationProps {
  info: CityInfo;
}

const Information: React.FC<InformationProps> = ({ info }) => {
  const dark = useTheme();

  return (
    <section className={`${styles.information} ${dark ? styles.dark : ''}`}>
      <h2>О городе</h2>
      <p>{info.description}</p>
      <ul className={styles.details}>
        <li><strong>Страна:</strong> {info.country}</li>
        <li><strong>Население:</strong> {info.population} чел.</li>
        <li><strong>Год основания:</strong> {info.foundationYear}</li>
      </ul>
    </section>
  );
};

export default Information;