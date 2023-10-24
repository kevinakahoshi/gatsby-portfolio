// sanity.config.js
import { defineConfig } from "sanity";
import { deskTool } from 'sanity/desk'
import schemas from "./schemas/schema";

export default defineConfig({
  title: "portfolio",
  projectId: "4l2zpa34",
  dataset: "production",
  plugins: [deskTool()],
  schema: {
    types: schemas,
  },
});
