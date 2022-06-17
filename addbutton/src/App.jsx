import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Button from "./Button";

function App() {
  const [title, setTitle] = useState("");
  const [elements, setElements] = useState([]);
  function addButton() {
    setElements([...elements].push(title));
  }
  console.log("line13", elements);
  return (
    <div className="App">
      <input
        type={text}
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button onClick={addButton}>add</button>
      {/* {elements.map(()=>{

      })} */}
    </div>
  );
}

export default App;
