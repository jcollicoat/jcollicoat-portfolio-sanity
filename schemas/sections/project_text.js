export default {
  type: "object",
  name: "project_text",
  title: "Text",
  preview: {
    prepare: () => ({ title: "Text" }),
  },
  fields: [
    {
      type: "string",
      name: "heading",
      title: "Heading",
    },
    {
      type: "text",
      name: "copy",
      title: "Copy",
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
            value: "file",
            title: "File/Document",
          },
          {
            value: "external",
            title: "External",
          },
        ],
      },
      initialValue: "none",
    },
    {
      type: "string",
      name: "cta_text",
      title: "CTA Text",
      hidden: ({ parent }) => parent.include_cta === "none",
    },
    {
      type: "reference",
      name: "link_internal",
      title: "Internal Link",
      to: [{ type: "page" }, { type: "project" }],
      hidden: ({ parent }) => parent.include_cta !== "internal",
    },
    {
      type: "reference",
      name: "link_file",
      title: "File/Document",
      to: [{ type: "filedoc" }],
      hidden: ({ parent }) => parent.include_cta !== "file",
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
