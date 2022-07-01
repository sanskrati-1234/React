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
      }, (res.count - 1) * 1000);
    }
  }, [res]);
  function api() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        setRes({ count: res.count + 1, status: response.status });
        if (response.ok) {
          return response.json();
        }

        throw new Error("error");
      })

      .then((data) => {
        console.log("line29", data, "count", res.count);
        setData([...data]);
      })
      .catch((error) => console.log(error.message));
  }
  console.log("lin31", data);
  return <div className="App"></div>;
}

export default App;
