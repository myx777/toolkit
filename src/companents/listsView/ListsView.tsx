import { useSelector } from "react-redux"

const ListsView = () => {
  const data = useSelector(state => state.search)

  console.info(data)
  if (data && data.search) {
    return (
      <div>
        {data && data.search && (
          <>
            <div className="">Всего найдено: {data.totalResults}</div>
            <ul className="films__list">
              {data.search.map(film => (
                <li key={film.title}>
                  <div>
                    <img src={film.poster} alt={film.title} />
                    <div>{film.title}</div>
                    <div>{film.year}</div>
                    <div>{film.type}</div>
                    <div>Ретинг imdbID: {film.imdbID}</div>
                  </div>
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    )
  }

  // return (
  //     <div>
  //         {data && data.search && (
  //             <>
  //                 <div className="">Всего найдено: {data.totalResults}</div>
  //                 <ul className="films__list">
  //                     {data.search.map(film => (
  //                         <li key={film.title}>
  //                             <div>
  //                                 <img src={film.poster} alt={film.title} />
  //                                 <div>{film.title}</div>
  //                                 <div>{film.year}</div>
  //                                 <div>{film.type}</div>
  //                                 <div>Ретинг imdbID: {film.imdbID}</div>
  //                             </div>
  //                         </li>
  //                     ))}
  //                 </ul>
  //             </>
  //         )}
  //     </div>
  // );
}

export default ListsView
