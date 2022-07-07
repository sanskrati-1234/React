import { useState } from "react";
export default function App() {
  const [name, setName] = useState("");

  function debounce(func, timeout = 300) {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        func.apply(this, args);
      }, timeout);
    };
  }

  return (
    <div className="App">
      <input onChange={debounce((e) => setName(e.target.value))} />
      <br />
      {name}
    </div>
  );
}
