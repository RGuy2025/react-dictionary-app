import React from "react";

export default function Antonyms(props) {
  if (props.antonyms) {
    return (
      <div className="Antonyms">
        <strong>Antonyms: </strong>
        <ul className="AntonymsList">
           <li>{props.antonyms}</li>
        </ul>
      </div>
    );
  } else {
    return null;
  }
}
