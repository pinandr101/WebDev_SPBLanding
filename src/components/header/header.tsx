import React from "react";
import styles from "./header.module.css";
import { useTheme } from "../../contexts/ThemeContext";

interface HeaderProps {
  name: string;
  foundationYear: number;
}

const now = new Date();

function getEnding(n: number): string{
  const last_two: number = n % 100;
  const last_one: number = n % 10;
  if (last_two >= 11 && last_two <= 14){
    return 'лет';
  }
  if (last_one == 1){
    return 'год';
  }
  else if (last_one >= 2 && last_one <= 4){
    return 'года';
  }
  return 'лет';
}

const Header: React.FC<HeaderProps> = ({ name, foundationYear }) => {
  const dark = useTheme();

  return (
    <header className={`${styles.header} ${dark ? styles.dark : ''}`}>
      <h1 className={styles.title}>Добро пожаловать в {name}!</h1>
      <p className={styles.subtitle}>
        Откройте для себя красоту и богатую историю города, основанного{" "}
        {now.getFullYear() - foundationYear} {getEnding(now.getFullYear() - foundationYear)} назад!
      </p>
    </header>
  );
};

export default Header;
