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
        <SearchEngine defaultKeyword="Hello" />
        <footer>
          Coded by{" "}
          <a
            href="https://www.shecodes.io/graduates/138591-rachel-guyett"
            target="_blank"
            rel="noopener noreferrer"
          >
            Rachel Guyett
          </a>{" "}
          and is opensourced on{" "}
          <a
            href="https://github.com/RGuy2025"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
