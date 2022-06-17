import { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  const [res, setRes] = useState({ count: 0, status: 404 });
  useEffect(() => {
    if (res.count < 3 && res.status !== 200) {
      console.log("line10", res.status);
      setTimeout(() => {
        console.log("api");
        api();
      }, res.count - 1 * 1000);
    }
  }, [res]);
  function api() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        if (res.status === 200) {
          setRes({ count: res.count + 1, res: res.status });
        } else {
          setRes({ res: res.status });
        }
        res.json();
      })
      .then((data) => setData(data));
  }
  return <div className="App"></div>;
}

export default App;
