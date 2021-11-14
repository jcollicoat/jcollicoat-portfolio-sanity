export default {
  type: "object",
  name: "about_me",
  title: "About Me",
  preview: {
    prepare: () => ({ title: "About Me" }),
  },
  fieldsets: [
    {
      name: "experience_fields",
      title: "Experience",
    },
    {
      name: "education_fields",
      title: "Education",
    },
  ],
  fields: [
    {
      fieldset: "experience_fields",
      type: "array",
      name: "experience",
      title: "Roles/Projects",
      of: [
        {
          type: "object",
          name: "role",
          title: "Role",
          fields: [
            {
              type: "string",
              name: "company",
              title: "Company",
            },
            {
              type: "string",
              name: "time_period",
              title: "Time Period",
            },
            {
              type: "text",
              name: "description",
              title: "Description",
            },
          ],
        },
        {
          type: "object",
          name: "freelance",
          title: "Freelance Project",
          fields: [
            {
              type: "string",
              name: "client",
              title: "Client",
            },
            {
              type: "string",
              name: "project",
              title: "Project",
            },
            {
              type: "string",
              name: "time_period",
              title: "Time Period",
            },
            {
              type: "text",
              name: "description",
              title: "Description",
            },
          ],
        },
      ],
    },
    {
      fieldset: "education_fields",
      type: "array",
      name: "education",
      title: "Courses",
      of: [
        {
          type: "object",
          name: "course",
          title: "Course",
          fields: [
            {
              type: "string",
              name: "name",
              title: "Name",
            },
            {
              type: "string",
              name: "location",
              title: "Location",
            },
            {
              type: "string",
              name: "time_period",
              title: "Time Period",
            },
            {
              type: "text",
              name: "description",
              title: "Description",
            },
          ],
        },
      ],
    },
  ],
};
