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
    {
      name: "content",
      title: "Page Content",
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
      description: "Leave blank for the homepage.",
      options: {
        source: "name",
        slugify: (input) =>
          input.toLowerCase().replace(/\s+/g, "-").slice(0, 200),
      },
    },
    {
      fieldset: "details",
      type: "boolean",
      name: "uses_light_theme",
      title: "Light Theme",
      initialValue: false,
    },
    // Page Content
  ],
};
