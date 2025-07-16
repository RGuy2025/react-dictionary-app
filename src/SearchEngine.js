import React, {useState} from "react";
import "./SearchEngine.css";

export default function SearchEngine() {

  let [keyword, setKeyword] = useState("");

  function search(event) { 
    event.preventDefault();
  }
  
  function handleKeywordChange(event) { 
    setKeyword(event.target.value);
    
  }
  return (
    <div className="SearchEngine">
      <form onSubmit={search}>
        <input
          type="search"
          onChange= { handleKeywordChange }
          placeholder="Search for a word..."
          
        />
       
      </form>
    </div>
  );
}