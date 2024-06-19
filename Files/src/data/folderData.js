const tree = {
  folderId: 1,
  name: "root",
  isFolder: true,
  items: [
    {
      folderId: 2,
      name: "public",
      isFolder: true,
      items: [{ name: "index.js", isFolder: false, folderId: 5 }],
    },
    {
      folderId: 3,
      name: "src",
      isFolder: true,
      items: [
        {
          folderId: 4,
          name: "date",
          isFolder: true,
          items: [
            {
              name: "folderData.js",
              isFolder: false,
              folderId: 6,
            },
          ],
        },
      ],
    },
  ],
};

export default tree;
