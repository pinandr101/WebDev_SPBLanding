import React from "react";
import styles from "./footer.module.css";
import { useTheme } from "../../contexts/ThemeContext";

const Footer: React.FC = () => {
  const dark = useTheme();

  return (
    <footer className={`${styles.footer} ${dark ? styles.dark : ''}`}>
      <p>Неофициальный лендинг города Санкт-Петербург. Все права не защищены.</p>
    </footer>
  );
};

export default Footer;