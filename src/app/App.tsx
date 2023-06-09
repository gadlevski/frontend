import {useTheme} from "app/providers/ThemeProvider/lib/useTheme";
import {classNames} from "shared/lib/classNames/classNames";
import {AboutPage} from "pages/AboutPage";
import {MainPage} from "pages/MainPage";
import {Suspense} from "react";
import {Link, Route, Routes} from "react-router-dom";
import "./styles/index.scss";

const App = () => {
  const {theme, toggleTheme} = useTheme();
  return (
    <div className={classNames("app", {}, [theme])}>
      <button onClick={toggleTheme}>Переключить тему</button>
      <Link to={"/"}>Главная</Link>
      <Link to={"about"}>О нас</Link>
      <Suspense fallback={<div>Загрузка страницы</div>}>
        <Routes>
          <Route path="/about" element={<AboutPage />} />
          <Route path="/" element={<MainPage />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
