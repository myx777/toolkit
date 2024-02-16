import "./App.css"
import SearchInput from "./companents/search_input/SearchInput"


const App = () => {
  return (
    <div className="page__container">
      <header className="page__header">
      < SearchInput />
      </header>
      <main className="page__main"></main>
      <footer className="page__footer"></footer>
    </div>

  )
}

export default App
