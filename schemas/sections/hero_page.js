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
      type: "string",
      name: "intro",
      title: "Intro",
    },
  ],
};
