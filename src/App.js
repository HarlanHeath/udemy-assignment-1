import React, { useState } from "react";
import UserInput from "./Components/UserInput";
import UserOutput from "./Components/UserOutput";
import "./App.css";

function App() {
  const [userName, setUserName] = useState("Harlan");

  const handleNameChange = event => {
    console.log(event.target.value);
    setUserName(event.target.value);
  };

  return (
    <div className="App">
      <UserOutput userName={userName} />
      <UserOutput userName={userName} />
      <UserInput nameChange={handleNameChange} />
    </div>
  );
}

export default App;
