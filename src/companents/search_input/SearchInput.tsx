import { useState } from "react";
import { fetchFilms } from "./searchSlice";
import { useAppDispatch } from "../../redux/hooks";

/**
 * Компонент для ввода запроса поиска фильмов.
 * 
 * @returns {JSX.Element} Форма для ввода запроса поиска фильмов.
 */
const SearchInput = (): JSX.Element => {
  const [film, setFilm] = useState<string>("");

  const dispatch = useAppDispatch();

  /**
   * Обработчик отправки формы поиска.
   * 
   * @param {React.FormEvent<HTMLFormElement>} e - Событие отправки формы.
   */
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (film.trim() !== "") {
      dispatch(fetchFilms(film));
    }
  };

  return (
    <div className="search__container">
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="input_search_id">Search:</label>
        <input
          type="text"
          id="input_search_id"
          value={film}
          onChange={(event) => setFilm(event.target.value)}
        />
        <button type="submit" className="search__button">Поиск</button>
      </form>
    </div>
  );
};

export default SearchInput;
