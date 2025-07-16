import React from "react";

export default function Meaning(props) {
  console.log(props.meaning);
  return (
    <ul className="Meaning">
      <li>{props.meaning.partOfSpeech}</li>
      <p>
        {props.meaning.definition}
        <br />
        <em>{props.meaning.example}</em>
      </p>
    </ul>
  );
}
