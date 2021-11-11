export default {
  type: "object",
  name: "article_component",
  title: "Component",
  preview: {
    prepare: () => ({ title: "Component" }),
  },
  fields: [
    {
      type: "string",
      name: "component",
      title: "Component String",
    },
  ],
};
