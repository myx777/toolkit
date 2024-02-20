import { Route, Routes } from "react-router-dom";
import ListsView from "./listsView/ListsView";
import FavoriteFilms from "./favorite/FavoriteFilms";

/**
 * Компонент для управления маршрутами приложения.
 * Содержит маршруты для отображения списка фильмов и избранных фильмов.
 * @returns {JSX.Element} Элемент React.
 */
const Generally = () => {
  return (
    <>
      <Routes>
        {/* Маршрут для отображения списка фильмов */}
        <Route path="/" element={<ListsView />} />
        {/* Маршрут для отображения избранных фильмов */}
        <Route path="/favorites" element={<FavoriteFilms />} />
      </Routes>
    </>
  );
};

export default Generally;
