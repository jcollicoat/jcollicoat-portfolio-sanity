export default {
  fieldset: "seo",
  type: "text",
  name: "meta_description",
  title: "Meta Description",
  description: "Optimal length 140-160 characters.",
  validation: (Rule) => [
    Rule.required().error("This field is required."),
    Rule.max(160).warning("This title is longer than 160 characters."),
  ],
};
