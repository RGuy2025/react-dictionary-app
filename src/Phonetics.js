import React from "react";

export default function Phonetics(props) {
  if (props.phonetic) {
    return (
      <div className="Phonetics">
        <h3>{props.phonetic}</h3>
      </div>
    );
  } else {
    return null;
  }
}
