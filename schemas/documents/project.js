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
        collapsed: false,
      },
    },
    {
      name: "content",
      title: "Project Content",
      options: {
        collapsible: true,
        collapsed: false,
      },
    },
  ],
  fields: [
    // SEO
    {
      fieldset: "seo",
      type: "string",
      name: "meta_title",
      title: "Meta Title",
      description: "Optimal length 50-60 characters.",
      validation: (Rule) => [
        Rule.required().error("This field is required."),
        Rule.max(60).warning("This title is longer than 60 characters."),
      ],
    },
    {
      fieldset: "seo",
      type: "text",
      name: "meta_description",
      title: "Meta Description",
      description: "Optimal length 140-160 characters.",
      validation: (Rule) =>
        Rule.max(160).warning(
          "This description is longer than 160 characters."
        ),
    },
    {
      fieldset: "seo",
      type: "image",
      name: "meta_image",
      title: "Meta Image",
      description: "1200x628 pixels (1.91:1 aspect ratio).",
    },
    // Project Details
    {
      fieldset: "details",
      type: "string",
      name: "name",
      title: "Name",
    },
    {
      fieldset: "details",
      type: "text",
      name: "description",
      title: "Description",
    },
    {
      fieldset: "details",
      type: "image",
      name: "file",
      title: "Image",
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
      fieldset: "details",
      type: "array",
      name: "tags",
      title: "Tags",
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
    // Project Content
  ],
};
