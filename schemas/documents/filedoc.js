export default {
  type: "document",
  name: "filedoc",
  title: "Files",
  preview: {
    select: {
      title: "name",
    },
  },
  fields: [
    {
      type: "string",
      name: "name",
      title: "Name",
    },
    {
      type: "file",
      name: "file",
      title: "File",
    },
  ],
};
