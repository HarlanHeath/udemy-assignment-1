import React from "react";
import "./UserOutput.css";

export default function UserOutput(props) {
  return (
    <div className="output">
      <p> {props.userName} </p>
      <p> Please don't change me! </p>
    </div>
  );
}
