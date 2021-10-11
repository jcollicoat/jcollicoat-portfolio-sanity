import meta_title from "../objects/meta_title";
import meta_description from "../objects/meta_description";
import meta_image from "../objects/meta_image";

export default {
  type: "document",
  name: "page",
  title: "Pages",
  preview: {
    select: {
      title: "name",
      subtitle: "meta_description",
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
      title: "Page Information",
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
    // Page Information
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
      description: "Doesn't matter for the homepage.",
      options: {
        source: "name",
        slugify: (input) =>
          input.toLowerCase().replace(/\s+/g, "-").slice(0, 200),
      },
    },
    {
      fieldset: "details",
      type: "string",
      name: "theme",
      title: "Select Theme",
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
    // Page Content
    {
      type: "array",
      name: "content",
      title: "Page Content",
      of: [{ type: "hero_home" }, { type: "projects" }],
    },
  ],
};
