import { filmsState } from "../search_input/searchSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { useState } from "react";
import "./listView.css";
import SearchInput from "../search_input/SearchInput";
import { addFilmFavorite, removeFilmFavorite } from "../favorite/favoriteSlice";
import type { Search } from "../../types/dataType";

/**
 * Отображает представление для списка фильмов и позволяет пользователям отмечать фильмы как избранные.
 *
 * @component
 * @return {JSX.Element}
 */
const ListsView = () => {
  const [favorites, setFavorites] = useState<string[]>([]);

  const state = useAppSelector(filmsState);
  const dispatch = useAppDispatch();

  const { data, loading, error } = state;

  /**
   * Переключает статус фильма как избранного.
   *
   * @param {Search} film - Объект фильма, который будет отмечен как избранный.
   * @return {void}
   */
  const toggleFavorite = (film: Search): void => {
    if (favorites.includes(film.imdbID)) {
      setFavorites(favorites.filter(id => id !== film.imdbID));
      dispatch(removeFilmFavorite(film.imdbID));
    } else {
      setFavorites([...favorites, film.imdbID]);
      dispatch(addFilmFavorite(film));
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (data !== null && data.Response === "False") {
    return <div>Error: {data.Error}</div>;
  }

  return (
    <div>
      <SearchInput />
      {data !== null && data.Search && (
        <ul className="list-group">
          {data.Search.map(film => (
            <li className="list-group-item" key={film.imdbID}>
              <span
                className="favorite__film"
                onClick={() => toggleFavorite(film)}
                style={{
                  color: favorites.includes(film.imdbID) ? "yellow" : "white",
                  cursor: "pointer",
                }}
              >
                &#9733;
              </span>
              <img src={film.Poster} alt={film.Poster} />
              <div>
                <div>Название:{film.Title}</div>
                <div>Год: {film.Year}</div>
                <div>Тип: {film.Type}</div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ListsView;
