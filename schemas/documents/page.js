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
