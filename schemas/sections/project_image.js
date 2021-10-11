export default {
  type: "object",
  name: "project_image",
  title: "Image",
  preview: {
    prepare: () => ({ title: "Image" }),
  },
  fields: [
    {
      type: "image",
      name: "image",
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
      type: "string",
      name: "image_size",
      title: "Image Size",
      options: {
        list: [
          {
            value: "small",
            title: "Small",
          },
          {
            value: "medium",
            title: "Medium",
          },
          {
            value: "large",
            title: "Large",
          },
          {
            value: "full",
            title: "Full Width",
          },
        ],
      },
      initialValue: "medium",
    },
    {
      type: "boolean",
      name: "include_caption",
      title: "Include Caption",
      initialValue: false,
    },
    {
      type: "string",
      name: "caption_position",
      title: "Caption Position",
      options: {
        list: [
          {
            value: "left",
            title: "Left",
          },
          {
            value: "center",
            title: "Center",
          },
          {
            value: "right",
            title: "Right",
          },
        ],
      },
      initialValue: "center",
      hidden: ({ parent }) => !parent?.include_caption,
    },
    {
      type: "text",
      name: "caption",
      title: "Caption",
      hidden: ({ parent }) => !parent?.include_caption,
    },
    {
      type: "boolean",
      name: "include_copy",
      title: "Include Copy",
      initialValue: false,
    },
    {
      type: "string",
      name: "copy_position",
      title: "Copy Position",
      options: {
        list: [
          {
            value: "above",
            title: "Above",
          },
          {
            value: "below",
            title: "Below",
          },
        ],
      },
      initialValue: "below",
      hidden: ({ parent }) => !parent?.include_copy,
    },
    {
      type: "string",
      name: "copy_heading",
      title: "Copy Heading",
      hidden: ({ parent }) => !parent?.include_copy,
    },
    {
      type: "text",
      name: "copy",
      title: "Copy",
      hidden: ({ parent }) => !parent?.include_copy,
    },
    {
      type: "string",
      name: "include_cta",
      title: "Include CTA",
      options: {
        list: [
          {
            value: "none",
            title: "None",
          },
          {
            value: "internal",
            title: "Internal",
          },
          {
            value: "external",
            title: "External",
          },
        ],
      },
      initialValue: "none",
      hidden: ({ parent }) => !parent?.include_copy,
    },
    {
      type: "reference",
      name: "link_internal",
      title: "Internal Link",
      to: [{ type: "page" }, { type: "project" }],
      hidden: ({ parent }) => parent.include_cta !== "internal",
    },
    {
      type: "url",
      name: "link_external",
      title: "External Link",
      validation: (Rule) =>
        Rule.uri({
          scheme: ["http", "https", "mailto", "tel"],
        }),
      hidden: ({ parent }) => parent.include_cta !== "external",
    },
  ],
};
