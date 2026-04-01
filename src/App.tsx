import { useState, useEffect } from "react";
import styles from "./App.module.css";
import { cityInfo, places, monuments, facts } from "./data/data";
import Header from "./components/header/header";
import Information from "./components/information/information";
import Places from "./components/places/places";
import Monuments from "./components/monuments/monuments";
import Facts from "./components/facts/facts";
import Footer from "./components/footer/footer";
import { ThemeProvider } from "./contexts/ThemeContext";

const App: React.FC = () => {
  const [darkThemeOn, setDarkThemeOn] = useState<boolean>(false);

  useEffect(() => {
    if (darkThemeOn) {
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
    }
  }, [darkThemeOn]);

  const toggleTheme = () => {
    setDarkThemeOn(prev => !prev);
  };

  return (
    <ThemeProvider dark={darkThemeOn}>
      <div className={`${styles.app} ${darkThemeOn ? styles.dark : ''}`}>
        <ul className={styles.topNav}>
          <li>
            <button onClick={toggleTheme} className={styles.themeToggle}>
              <img src={darkThemeOn ? './public/ToLightTheme.png' : './public/ToDarkTheme.png'} alt="theme toggle" />
            </button>
          </li>
          <li>
            <Header name={cityInfo.name} foundationYear={cityInfo.foundationYear} />
          </li>
        </ul>
        <Information info={cityInfo} />
        <Places places={places} />
        <Monuments monuments={monuments} />
        <Facts facts={facts} />
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default App;