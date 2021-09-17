import meta_title from "../objects/meta_title";
import meta_description from "../objects/meta_description";
import meta_image from "../objects/meta_image";

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
    meta_title,
    meta_description,
    meta_image,
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
      description: "A one-two sentence project description.",
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
