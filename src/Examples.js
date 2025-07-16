import React from "react";

export default function Examples(props) {
  if (props.example) {
    return (
      <div className="Examples">
        <em>
          <strong>Example:</strong> {props.example}
        </em>
      </div>
    );
  } else {
    return null;
  }
}
