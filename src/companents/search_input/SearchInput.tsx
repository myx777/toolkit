import { useState } from "react"
import useFetch from "../../hook/useFetch"
import { useDispatch, useSelector } from "react-redux"
import { search } from "./searchSlice"

const SearchInput = () => {
  const [film, setFilm] = useState([])
  const dispatch = useDispatch()

  const { status, fetchData } = useFetch({
    url: `https://www.omdbapi.com/?apikey=bcc8b383&s=${film}&plot=full`,
  })

  const { data, error, loading } = status;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    fetchData()
  }

  if (!loading && error === null) {
    dispatch(search(data))
  }

  console.log("Status:", status)

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
      {loading && <div className="loading">Loading...</div>}
      {error && <div className="error">{error}</div>}
    </div>
  )
}
export default SearchInput
