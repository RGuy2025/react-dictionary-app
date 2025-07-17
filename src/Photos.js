import React from "react";
import "./Photos.css";
export default function Photos(props) {
  
  if (props.photos) {
    return (
      <div>
        <h3>Photos</h3>
        <div className="Photos">
          <div className="row">
            {props.photos.map(function (photo, index) {
              return (
                <div className="col-4" key={index}>
                  < a href={photo.src.original} target="_blank" rel="noreferrer">
                  <img
                    src={photo.src.landscape}
                    alt={photo.alt}
                    className="Photos img-fluid mb-4"
                  /> </a>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <h3>Photos</h3>
        <p>No photos available at the moment.</p>{" "}
      </div>
    );
  }
}
