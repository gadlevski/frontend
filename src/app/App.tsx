import {useTheme} from "app/providers/ThemeProvider/lib/useTheme";
import {Link} from "react-router-dom";
import {classNames} from "shared/lib/classNames/classNames";
import {AppRouter} from "./providers/router";
import "./styles/index.scss";

const App = () => {
  const {theme, toggleTheme} = useTheme();
  return (
    <div className={classNames("app", {}, [theme])}>
      <button onClick={toggleTheme}>Переключить тему</button>
      <Link to={"/"}>Главная</Link>
      <Link to={"about"}>О нас</Link>
      <AppRouter />
    </div>
  );
};

export default App;
