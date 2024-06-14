import { useState } from "react";

function Folder({ explore }) {
  const [show, setShow] = useState(false);

  if (!explore.isFolder) {
    return (
      <div className="file">
        <div>{explore.name}</div>
      </div>
    );
  }

  return (
    <div className="folder">
      <div onClick={() => setShow(!show)}> {explore.name}</div>
      <div style={{ display: show ? "block" : "none" }}>
        {explore.items.map((item) => {
          return <Folder explore={item} />;
        })}
      </div>
    </div>
  );
}

export default Folder;
