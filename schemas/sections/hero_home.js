export default {
  type: "object",
  name: "hero_home",
  title: "Hero (Home)",
  preview: {
    prepare: () => ({ title: "Hero (Home)" }),
  },
  fields: [
    {
      type: "string",
      name: "heading",
      title: "Heading",
    },
    {
      type: "text",
      name: "intro",
      title: "Intro",
    },
    {
      type: "string",
      name: "cta",
      title: "CTA Text",
    },
  ],
};
