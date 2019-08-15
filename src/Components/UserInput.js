import React from "react";

export default function UserInput(props) {
  return (
    <div>
      <input
        type="text"
        placeholder="Username Here"
        onChange={props.nameChange}
      />
    </div>
  );
}
