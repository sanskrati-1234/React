import { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import tree from "./data/folderData";
import Folder from "./controllers/Folder";
import Progress from "./controllers/Progress";
function App() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setCount((count) => count + 1);
    }, 100);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <>
      {/* // <Folder explore={tree} />; */}
      <Progress value={count} />
    </>
  );
}

export default App;
