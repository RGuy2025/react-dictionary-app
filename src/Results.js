import React from "react";
import Meaning from "./Meaning";
import Phonetics from "./Phonetics";

import "./Results.css";

export default function Results(props) {
  console.log(props.results);
  if (props.results) {
    return (
      <div className="Results">
        <div className="WordResult text-center">
          <h2 className="text-capitalize">{props.results.word}</h2>
          <Phonetics phonetic={props.results.phonetic} />
        </div>
        <div className="row">
          {props.results.meanings.map(function (meaning, index) {
            return (
              <div className="col-6" key={index}>
                <div className="Meaning">
                  <Meaning meaning={meaning} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  } else {
    return <h2> Sorry. Word not found. </h2>;
  }
}
