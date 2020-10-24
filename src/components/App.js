import React, { Component, useState } from "react";
import "./../styles/App.css";

function App() {
  let [text, settext] = useState("");
  function handleclick() {
    settext(
      "Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy"
    );
  }
  return (
    <div id="main">
      <button id="click" onClick={handleclick()}>
        <p id="para">{text}</p>
      </button>
    </div>
  );
}

export default App;
