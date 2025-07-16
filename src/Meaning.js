import React from "react";
import Examples from "./Examples";
import Synonyms from "./Synonyms";
import Antonyms from "./Antonyms";

export default function Meaning(props) {
  console.log(props.meaning);
  return (
    <ul className="Meaning">
      <li>{props.meaning.partOfSpeech}</li>

      {props.meaning.definition}
      <br />
      <Examples example={props.meaning.example} />
      <Synonyms synonyms={props.meaning.synonyms} />
      <Antonyms antonyms={props.meaning.antonyms} />
    </ul>
  );
}
