import "./App.css"
import Generally from "./companents/Generally"
import HeaderNav from "./companents/HeaderNav/HeaderNav"

const App = () => {
  return (
    <div className="page__container">
      <header className="page__header">
        <HeaderNav />
      </header>
      <main className="page__main">
        <Generally />
      </main>
    </div>
  )
}

export default App
