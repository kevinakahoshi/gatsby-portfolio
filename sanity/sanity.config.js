// sanity.config.js
import { defineConfig } from "sanity";
import { deskTool } from 'sanity/desk';
import { visionTool } from '@sanity/vision';
import schemas from "./schemas/schema";

export default defineConfig({
  title: "portfolio",
  projectId: "4l2zpa34",
  dataset: "production",
  plugins: [deskTool(), visionTool()],
  schema: {
    types: schemas,
  },
  tools: (prev) => {
    if (import.meta.env.DEV) return prev
    return prev.filter((tool) => tool.name !== 'vision')
  },
});
