import { useState } from "react";

function Folder({ explore, insertDataToTree }) {
  const [show, setShow] = useState(false);
  const [addFile, setAddFile] = useState(false);
  const [addFolder, setAddFolder] = useState(false);
  if (explore && !explore.isFolder) {
    return (
      <div className="file">
        <div>{explore.name}</div>
      </div>
    );
  }

  const saveFile = (e) => {
    e.stopPropagation();
    //setFileName(e.target.value);
    if (e.keyCode === 13) {
      // explore.items.unshift({ name: e.target.value, isFolder: false });
      insertDataToTree(explore.folderId, false, e.target.value);
      setAddFile(false);
    }
  };

  const saveFolder = (e) => {
    //setFolder(e.target.value);
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
          return <Folder explore={item} insertDataToTree={insertDataToTree} />;
        })}
      </div>
    </div>
  );
}

export default Folder;
