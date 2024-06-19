import { useEffect } from "react";
import "./App.css";
import axios from "axios";

function App() {
  useEffect(() => {
    axios.get(`https://picsum.photos/v2/list?page=${page}&limit=20`);
  });
  return <div></div>;
}

export default App;
