import { FiLink, FiFile, FiPaperclip } from "react-icons/fi";

import meta_title from "../objects/meta_title";
import meta_description from "../objects/meta_description";
import meta_image from "../objects/meta_image";

export default {
  type: "document",
  name: "article",
  title: "Articles",
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
      title: "Article Details",
      options: {
        collapsible: true,
      },
    },
    {
      name: "content",
      title: "Article Content",
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
    // Article Details
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
          input
            .toLowerCase()
            .replace(/[^\w ]+/g, "")
            .replace(/ +/g, "-")
            .slice(0, 200),
      },
    },
    {
      fieldset: "details",
      type: "text",
      name: "description",
      title: "Description",
      description: "A one-two sentence article description.",
    },
    {
      fieldset: "details",
      type: "text",
      name: "intro",
      title: "Intro",
      description: "A longer intro the article. Displays on the article page.",
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
      type: "array",
      name: "tags",
      title: "Tags",
      of: [
        {
          type: "reference",
          title: "Tag",
          to: [
            {
              type: "article_tag",
            },
          ],
        },
      ],
    },
    // Article Content
    {
      type: "array",
      name: "content",
      title: "Article Content",
      of: [
        {
          type: "block",
          marks: {
            annotations: [
              {
                type: "object",
                name: "link_internal",
                title: "Internal Link",
                blockEditor: {
                  icon: FiPaperclip,
                },
                fields: [
                  {
                    type: "reference",
                    name: "reference",
                    title: "Reference",
                    to: [
                      { type: "page" },
                      { type: "project" },
                      { type: "article" },
                    ],
                  },
                ],
              },
              {
                type: "object",
                name: "link_file",
                title: "File/Document",
                blockEditor: {
                  icon: FiFile,
                },
                fields: [
                  {
                    type: "reference",
                    name: "reference",
                    title: "Reference",
                    to: [{ type: "filedoc" }],
                  },
                ],
              },
              {
                type: "object",
                name: "link_external",
                title: "External Link",
                blockEditor: {
                  icon: FiLink,
                },
                fields: [
                  {
                    type: "url",
                    name: "url",
                    title: "Link",
                    validation: (Rule) =>
                      Rule.uri({
                        scheme: ["http", "https", "mailto", "tel"],
                      }),
                  },
                ],
              },
            ],
          },
        },
        { type: "article_image" },
        { type: "code" },
      ],
    },
  ],
};
