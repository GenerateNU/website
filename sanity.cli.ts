import { defineCliConfig } from 'sanity/cli';

export default defineCliConfig({
  api: {
    projectId: process.env.SANITY_STUDIO_PROJECT_ID,
    dataset: process.env.SANITY_STUDIO_DATASET,
  },

  typegen: {
    path: 'src/sanity/schemaTypes/*.{ts,tsx,js,jsx}',
    schema: 'src/sanity/schema.json',
    generates: 'src/sanity/types.ts',
    formatGeneratedCode: false,
  },
});
