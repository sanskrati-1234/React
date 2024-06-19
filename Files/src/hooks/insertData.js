import tree from "../data/folderData";

const insertData = () => {
  const insert = (tree, folderId, isFolder, item) => {
    if (tree.folderId === folderId && tree.isFolder) {
      tree.items.unshift({
        folderId: new Date().getTime(),
        isFolder: isFolder,
        name: item,
      });
      return tree;
    }
    let latest = [];
    latest = tree.items?.map((data) => insert(data, folderId, isFolder, item));

    return { ...tree, items: latest };
  };

  return { insert };
};

export default insertData;
