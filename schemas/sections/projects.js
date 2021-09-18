export default {
  type: "object",
  name: "projects",
  title: "Projects",
  fields: [
    {
      type: "array",
      name: "projects_list",
      title: "Projects List",
      of: [
        {
          type: "reference",
          title: "Project",
          to: [
            {
              type: "project",
            },
          ],
        },
      ],
    },
  ],
};
