export default {
  fieldset: "seo",
  type: "string",
  name: "meta_title",
  title: "Meta Title",
  description: "Optimal length 50-60 characters.",
  validation: (Rule) => [
    Rule.required().error("This field is required."),
    Rule.max(60).warning("This title is longer than 60 characters."),
  ],
};
