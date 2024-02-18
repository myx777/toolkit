import { useState } from "react"

import { useDispatch, useSelector } from "react-redux"
import { fetchFilms } from "./searchSlice";

const SearchInput = () => {
  const [film, setFilm] = useState([]);

  const dispatch = useDispatch()



  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    dispatch(fetchFilms(film));
  }

  return (
    <div className="search__container">
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="input_serach_id"></label>
        <input
          type="text"
          name=""
          id="input_serach_id"
          onChange={value => setFilm(value.target.value)}
        />
        <button className="search__button">Поиск</button>
      </form>
    </div>
  )
}
export default SearchInput
