export default {
  type: "object",
  name: "hero_page",
  title: "Hero (Page)",
  preview: {
    prepare: () => ({ title: "Hero (Page)" }),
  },
  fields: [
    {
      type: "string",
      name: "title",
      title: "Title",
    },
    {
      type: "text",
      name: "intro",
      title: "Intro",
    },
    {
      type: "boolean",
      name: "include_image",
      title: "Include Image",
      initialValue: false,
    },
    {
      type: "image",
      name: "image",
      title: "Image",
      fields: [
        {
          type: "boolean",
          name: "is_decorative",
          title: "Decorative",
          initialValue: false,
        },
        {
          type: "string",
          name: "alt",
          title: "Alt Text",
          hidden: ({ parent }) => parent?.is_decorative,
        },
      ],
      hidden: ({ parent }) => !parent?.include_image,
    },
  ],
};
