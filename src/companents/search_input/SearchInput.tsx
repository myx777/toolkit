import { useState } from "react";
import useFetch from "../../hook/useFetch";

const SearchInput = () => {
    const [film, setFilm] = useState([]);

    const { status, fetchData } = useFetch({
        url: `https://img.omdbapi.com/?apikey=64405bd2&t=${film}&plot=full`
    });
    

    console.info(film);
    
const handleSubmit = (e) => {
    e.preventDefault();
    fetchData();
    console.info(status);
    
}
console.log("Film:", film);
console.log("Status:", status);

    return (
        <div className="search__container">
            <form action="" onSubmit={handleSubmit}>
                <label htmlFor="input_serach_id"></label>
                <input type="text" name="" id="input_serach_id" onChange={(value) => setFilm(value.target.value)} />
                <button className="search__button">Поиск</button>
            </form>
        </div>
    )
}
export default SearchInput;