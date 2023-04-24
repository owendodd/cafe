import { defineConfig } from "tinacms";
import { designerFields } from "./templates";
import { archiveFields } from "./templates";
import { infoFields } from "./templates";
import { linkFields } from "./templates";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

export default defineConfig({
  branch,
  clientId: "1ae6a04a-9b64-4f13-b92a-d4ada38426c3", // Get this from tina.io
  token: "c3d297003da417845a3ee6d8167951e8099ac02f", // Get this from tina.io
  client: { skip: true },
  build: {
    outputFolder: "admin",
    publicFolder: "static",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "static",
    },
  },
  schema: {
    collections: [
      {
        format: "md",
        label: "Pages",
        name: "pages",
        path: "content",
        frontmatterFormat: "toml",
        frontmatterDelimiters: "+++",
        match: {
          include: "*",
        },
        templates: [
          {
            fields: [
              {
                type: "rich-text",
                name: "body",
                label: "Body of Document",
                description: "This is the markdown body",
                isBody: true,
              },
              ...designerFields(),
            ],
            label: "default",
            name: "default",
          },
          {
            fields: [
              {
                type: "rich-text",
                name: "body",
                label: "Body of Document",
                description: "This is the markdown body",
                isBody: true,
              },
              ...infoFields(),
            ],
            label: "info",
            name: "info",
          },
        ],
      },
      {
        format: "md",
        label: "Archive",
        name: "archive",
        path: "content/archive",
        frontmatterFormat: "toml",
        frontmatterDelimiters: "+++",
        match: {
          include: "*",
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
          ...archiveFields(),
        ],
      },
      {
        format: "md",
        label: "Designers",
        name: "designers",
        path: "content/designers",
        frontmatterFormat: "toml",
        frontmatterDelimiters: "+++",
        match: {
          include: "*",
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
          ...designerFields(),
        ],
      },

    ],
  },
});
