import { useState } from "react";

function Folder({ explore, setData }) {
  const [show, setShow] = useState(false);
  const [addFile, setAddFile] = useState(false);
  const [addFolder, setAddFolder] = useState(false);
  const [fileName, setFileName] = useState("");
  const [folder, setFolder] = useState("");
  if (!explore.isFolder) {
    return (
      <div className="file">
        <div>{explore.name}</div>
      </div>
    );
  }

  const saveFile = (e) => {
    //setFileName(e.target.value);
    if (e.keyCode === 13) {
      explore.items.unshift({ name: e.target.value, isFolder: false });
      setData(explore);
      setAddFile(false);
    }
  };

  const saveFolder = (e) => {
    setFolder(e.target.value);
    if (e.keyCode === 13) {
    }
  };

  return (
    <div className="folder">
      <div onClick={() => setShow(!show)}> {explore.name}</div>
      <div>
        <button onClick={() => setAddFile(true)}>Add File</button>
        {addFile && <input onKeyDown={saveFile} />}
        <button onClick={() => setAddFolder(true)}>Add Folder</button>
        {addFolder && <input onKeyDown={saveFolder} />}
      </div>
      <div style={{ display: show ? "block" : "none" }}>
        {explore.items.map((item) => {
          return <Folder explore={item} />;
        })}
      </div>
    </div>
  );
}

export default Folder;
