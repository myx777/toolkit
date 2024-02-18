import { useDispatch, useSelector } from "react-redux"
import { filmsList, filmsState } from "../search_input/searchSlice"
import { useAppSelector } from "../../redux/hooks"
import { useState } from "react"

const ListsView = () => {
  // const films = useAppSelector(filmsList);
  const [favorites, setFavorites] = useState([])
  const state = useAppSelector(filmsState)
  const { data, loading, error } = state

  console.info(state)
  console.info(data)

  const toggleFavorite = imdbID => {
    if (favorites.includes(imdbID)) {
      setFavorites(favorites.filter(id => id !== imdbID))
    } else {
      setFavorites([...favorites, imdbID])
    }
  }

  const dispatch = useDispatch()

  if (loading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error: {error.message}</div>
  }
  if (data.Response === "False") {
    return <div>Error: {data.Error}</div>
  }

  return (
    <div>
      {data.Search && (
        <ul>
          {data.Search.map(film => (
            <li key={film.imdbID}>
              <span
                onClick={() => toggleFavorite(film.imdbID)}
                style={{
                  color: favorites.includes(film.imdbID) ? "yellow" : "transparent",
                  cursor: "pointer",
                }}
              >
                &#9733;
              </span>
              <img src={film.Poster} alt="" />
              <div>
                <div>{film.Title}</div>
                <div>{film.Year}</div>
                <div>{film.Type}</div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default ListsView
