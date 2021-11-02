export default {
  type: "object",
  name: "project_image_grid",
  title: "Image Grid",
  preview: {
    prepare: () => ({ title: "Image Grid" }),
  },
  fields: [
    {
      type: "string",
      name: "copy_heading",
      title: "Copy Heading",
    },
    {
      type: "text",
      name: "copy",
      title: "Copy",
    },
    {
      type: "number",
      name: "columns",
      title: "Number of Columns",
      options: {
        list: [
          {
            value: 2,
            title: "2",
          },
          {
            value: 3,
            title: "3",
          },
          {
            value: 4,
            title: "4",
          },
          {
            value: 6,
            title: "6",
          },
          {
            value: 8,
            title: "8",
          },
        ],
      },
      initialValue: 3,
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
    },
    {
      type: "array",
      name: "items",
      title: "Items",
      of: [
        {
          type: "object",
          title: "Item",
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
              type: "boolean",
              name: "include_name",
              title: "Include Name",
              initialValue: false,
            },
            {
              type: "string",
              name: "name",
              title: "Name",
              hidden: ({ parent }) => !parent?.include_name,
            },
            {
              type: "boolean",
              name: "include_copy",
              title: "Include Copy",
              initialValue: false,
            },
            {
              type: "text",
              name: "copy",
              title: "Copy",
              hidden: ({ parent }) => !parent?.include_copy,
            },
          ],
        },
      ],
    },
  ],
};
