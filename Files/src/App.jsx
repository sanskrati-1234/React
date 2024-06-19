import { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import tree from "./data/folderData";
import Folder from "./controllers/Folder";
import Progress from "./controllers/Progress";
import Refresh from "./controllers/Refresh";
import insertData from "./hooks/insertData";
function App() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState(tree);
  const { insert } = insertData();
  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     setCount((count) => count + 1);
  //   }, 100);
  //   return () => {
  //     clearInterval(timer);
  //   };
  // }, []);

  const insertDataToTree = (folderId, isFolder, item) => {
    const final = insert(data, folderId, isFolder, item);
    setData(final);
  };

  return (
    <>
      <Folder explore={data} insertDataToTree={insertDataToTree} />
      {/* <Refresh /> */}
      {/* <Progress value={count} /> */}
    </>
  );
}

export default App;
