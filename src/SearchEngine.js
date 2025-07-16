import React, { useState } from "react";
import axios from "axios";
import "./SearchEngine.css";
import Results from "./Results";

export default function SearchEngine() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);

  function handleResponse(response) {
    console.log(response.data);
    
    setResults(response.data);
  }

  function search(event) {
    event.preventDefault();

    let apiKey = "5912o91beb33d634bfd91ta0a18fa0bd";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }
  return (
    <div className="SearchEngine">
      <form onSubmit={search}>
        <input
          type="search"
          onChange={handleKeywordChange}
          placeholder="Search for a word..."
        />
      </form>
      <Results results={results} />
    </div>
  );
}
