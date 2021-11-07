export default {
  type: "object",
  name: "article_image",
  title: "Image",
  preview: {
    select: { media: "image" },
    prepare: ({ media }) => ({ title: "Image", media: media }),
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
        ],
      },
      initialValue: "large",
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
        ],
      },
      initialValue: "left",
      hidden: ({ parent }) => !parent?.include_caption,
    },
    {
      type: "text",
      name: "caption",
      title: "Caption",
      hidden: ({ parent }) => !parent?.include_caption,
    },
  ],
};
