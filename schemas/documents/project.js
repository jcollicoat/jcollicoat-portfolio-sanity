export default {
  type: "document",
  name: "project",
  title: "Projects",
  preview: {
    select: {
      title: "name",
      subtitle: "description",
    },
  },
  fieldsets: [
    {
      name: "seo",
      title: "SEO",
      options: {
        collapsible: true,
      },
    },
    {
      name: "details",
      title: "Project Details",
      options: {
        collapsible: true,
      },
    },
  ],
  fields: [
    {
      type: "string",
      name: "title",
      title: "Page Title",
      fieldset: "seo",
    },
    {
      type: "string",
      name: "name",
      title: "Name",
      fieldset: "details",
    },
    {
      type: "text",
      name: "description",
      title: "Description",
      fieldset: "details",
    },
    {
      type: "image",
      name: "file",
      title: "Image",
      fieldset: "details",
      fields: [
        {
          type: "boolean",
          name: "is_decorative",
          title: "Decorative",
          initalValue: false,
        },
        {
          type: "string",
          name: "alt",
          title: "Alt Text",
          hidden: ({ parent }) => parent?.is_decorative,
        },
      ],
    },
    {
      type: "array",
      name: "tags",
      title: "Tags",
      fieldset: "details",
      of: [
        {
          type: "reference",
          title: "Tag",
          to: [
            {
              type: "project_tag",
            },
          ],
        },
      ],
    },
  ],
};
