// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "jcollicoat",
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // Projects
    {
      type: "document",
      name: "project",
      title: "Projects",
      fieldsets: [
        {
          name: "details",
          title: "Project Details",
        },
      ],
      fields: [
        {
          type: "number",
          name: "number",
          title: "Sort Order",
          fieldset: "details",
          validation: (Rule) => Rule.integer(),
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
          type: "object",
          name: "tags",
          title: "Tags",
          fieldset: "details",
          fields: [
            {
              type: "reference",
              name: "tag_one",
              title: "Tag One",
              to: [
                {
                  type: "project_tag",
                },
              ],
            },
            {
              type: "reference",
              name: "tag_two",
              title: "Tag Two",
              to: [
                {
                  type: "project_tag",
                },
              ],
            },
            {
              type: "reference",
              name: "tag_three",
              title: "Tag Three",
              to: [
                {
                  type: "project_tag",
                },
              ],
            },
          ],
        },
      ],
    },
    // Project Tags
    {
      type: "document",
      name: "project_tag",
      title: "Project Tags",
      fields: [
        {
          type: "string",
          name: "name",
          title: "Name",
        },
      ],
    },
  ]),
});
