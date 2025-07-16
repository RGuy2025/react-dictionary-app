import shecodes from "./shecodes.png";
import SearchEngine from "./SearchEngine";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header>
          <img src={shecodes} className="logo img-fluid" alt="logo" />
          <span className="DictionaryTitle"> React Dictionary Webpage</span>
        </header>
        <SearchEngine />
        <footer>
          Coded by Rachel Guyett and is opensourced on Github
        </footer>
      </div>
    </div>
  );
}

export default App;
