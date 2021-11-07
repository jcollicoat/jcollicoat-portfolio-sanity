// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";

// Pages Schema
import page from "./documents/page";

// Files Schema
import filedoc from "./documents/filedoc";

// Projects Schema
import project from "./documents/project";
import project_tag from "./documents/project_tag";

// Articles Schema
import article from "./documents/article";
import article_tag from "./documents/article_tag";

// Sections Schema
import hero_home from "./sections/hero_home";
import projects from "./sections/projects";
import project_image from "./sections/project_image";
import project_image_grid from "./sections/project_image_grid";
import project_image_text from "./sections/project_image_text";
import project_process_work from "./sections/project_process_work";
import project_text from "./sections/project_text";
import project_video from "./sections/project_video";

// Blocks Schema
import article_image from "./blocks/article_image";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "jcollicoat",
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // Pages
    page,
    // Files
    filedoc,
    // Articles
    article,
    // Projects
    project,
    // Tags
    article_tag,
    project_tag,
    // Sections
    hero_home,
    projects,
    project_image,
    project_image_grid,
    project_image_text,
    project_process_work,
    project_text,
    project_video,
    // Blocks,
    article_image,
  ]),
});
