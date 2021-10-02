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
      type: "slug",
      name: "slug",
      title: "Slug",
      options: {
        source: "name",
        slugify: (input) =>
          input.toLowerCase().replace(/\s+/g, "-").slice(0, 200),
      },
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
      type: "text",
      name: "intro",
      title: "On-Page Intro",
      description: "A longer intro the project, display on the project page.",
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
          initialValue: false,
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
      type: "boolean",
      name: "is_interactive",
      title: "Interactive",
      initialValue: false,
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
    {
      fieldset: "details",
      type: "string",
      name: "theme",
      options: {
        list: [
          {
            value: "dark",
            title: "Dark",
          },
          {
            value: "light",
            title: "Light",
          },
          {
            value: "custom",
            title: "Custom",
          },
        ],
      },
      initialValue: "dark",
    },
    {
      fieldset: "details",
      type: "object",
      name: "custom_theme",
      fields: [
        {
          type: "color",
          name: "background",
          title: "Background Colour",
          options: {
            disableAlpha: true,
          },
        },
        {
          type: "color",
          name: "text",
          title: "Text Colour",
          options: {
            disableAlpha: true,
          },
        },
      ],
      hidden: ({ document }) => document.theme !== "custom",
    },
    // Project Content
    {
      type: "array",
      name: "content",
      title: "Project Content",
      of: [{ type: "projects" }],
    },
  ],
};
