import React, { useState } from "react";
import type { Fact } from "../../types";
import styles from "./facts.module.css";
import { useTheme } from "../../contexts/ThemeContext";

interface FactsProps {
  facts: Fact[];
}

const Facts: React.FC<FactsProps> = ({ facts }) => {
  const dark = useTheme();
  const [show, setShow] = useState<boolean>(false);

  return (
    <section className={`${styles.facts} ${dark ? styles.dark : ''}`}>
      <h2>Исторические факты</h2>
      <button className={styles.toggleButton} onClick={() => setShow(!show)}>
        {show ? 'Скрыть' : 'Показать'} факты
      </button>
      <div className={styles.factList}>
        {(show ? facts : []).map(fact => (
          <div key={fact.id} className={styles.factCard}>
            <h3>{fact.name} ({fact.year})</h3>
            <p>{fact.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Facts;