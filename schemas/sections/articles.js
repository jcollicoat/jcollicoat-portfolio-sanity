export default {
  type: "object",
  name: "articles",
  title: "Articles",
  preview: {
    prepare: () => ({ title: "Articles List " }),
  },
  fields: [
    {
      type: "array",
      name: "articles_list",
      title: "Articles List",
      of: [
        {
          type: "reference",
          title: "Article",
          to: [
            {
              type: "article",
            },
          ],
        },
      ],
    },
  ],
};
