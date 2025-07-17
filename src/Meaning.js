import React from "react";
import Examples from "./Examples";
import Synonyms from "./Synonyms";
import Antonyms from "./Antonyms";
import "./Meaning.css";

export default function Meaning(props) {
  return (
    <ul>
      <li>
        <span className="PartOfSpeech">{props.meaning.partOfSpeech}</span>
      </li>

      {props.meaning.definition}
      <br />
      <Examples example={props.meaning.example} />
      <Synonyms synonyms={props.meaning.synonyms} />
      <Antonyms antonyms={props.meaning.antonyms} />
    </ul>
  );
}
