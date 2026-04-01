import React from "react";
import styles from "./header.module.css";
import { useTheme } from "../../contexts/ThemeContext";

interface HeaderProps {
  name: string;
  foundationYear: number;
}

const now = new Date();

const Header: React.FC<HeaderProps> = ({ name, foundationYear }) => {
  const dark = useTheme();

  return (
    <header className={`${styles.header} ${dark ? styles.dark : ''}`}>
      <h1 className={styles.title}>Добро пожаловать в {name}!</h1>
      <p className={styles.subtitle}>
        Откройте для себя красоту и богатую историю города, основанного{" "}
        {now.getFullYear() - foundationYear} лет назад!
      </p>
    </header>
  );
};

export default Header;