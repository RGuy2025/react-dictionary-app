import shecodes from "./shecodes.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header>
        <img src={shecodes} className="logo img-fluid" alt="logo" />
        <span className="DictionaryTitle"> React Dictionary Webpage</span>
      </header>
    </div>
  );
}

export default App;
