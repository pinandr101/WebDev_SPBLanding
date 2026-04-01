import React from "react";
import type { Monument } from "../../types";
import styles from "./monuments.module.css";
import { useTheme } from "../../contexts/ThemeContext";

interface MonumentsProps {
  monuments: Monument[];
}

const Monuments: React.FC<MonumentsProps> = ({ monuments }) => {
  const dark = useTheme();

  return (
    <section className={`${styles.monuments} ${dark ? styles.dark : ''}`}>
      <h2>Памятники и архитектура</h2>
      <div className={styles.list}>
        {monuments.map(m => (
          <div key={m.id} className={styles.item}>
            <h3>{m.name}</h3>
            <img src={`/Monuments/${m.pictureName}`} alt={m.name} />
            <p>{m.description}</p>
            <span className={styles.year}>{m.year} год</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Monuments;