export default {
  type: "object",
  name: "project_video",
  title: "Video",
  preview: {
    prepare: () => ({ title: "Video " }),
  },
  fields: [
    {
      type: "string",
      name: "video",
      title: "Video ID",
      description: "Last part of the video URL.",
    },
    {
      type: "string",
      name: "video_size",
      title: "Video Size",
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
