import { useAppDispatch, useAppSelector } from "../../redux/hooks"
import { favoritesState, removeFilmFavorite } from "./favoriteSlice"
import type { Search } from "../../types/dataType"

/**
 * Отображает список фильмов из избранного и позволяет пользователю удалять фильмы из этого списка.
 *
 * @component
 * @return {JSX.Element}
 */
const FavoriteFilms = () => {
  const state = useAppSelector(favoritesState)
  const dispatch = useAppDispatch();

  /**
   * Обрабатывает нажатие на кнопку удаления фильма из избранного.
   *
   * @param {string} imdbID - Идентификатор IMDb фильма, который нужно удалить из избранного.
   * @return {void}
   */
  const handleRemoveFavorite = (imdbID: string): void => {
    dispatch(removeFilmFavorite(imdbID))
  }

  return (
    <div>
      {state && (
        <ul className="list-group">
          {state.data.map((film: Search) => (
            <li className="list-group-item" key={film.imdbID}>
              <img src={film.Poster} alt={film.Poster} />
              <div>
                <div>Название:{film.Title}</div>
                <div>Год: {film.Year}</div>
                <div>Тип: {film.Type}</div>
                <button onClick={() => handleRemoveFavorite(film.imdbID)}>
                  Удалить из избранного
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default FavoriteFilms
