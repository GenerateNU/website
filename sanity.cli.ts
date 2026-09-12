import { defineCliConfig } from 'sanity/cli';

export default defineCliConfig({
  api: {
    projectId: '4whxapdc',
    dataset: 'generate-schema',
  },

  typegen: {
    path: 'src/sanity/schemaTypes/*.{ts,tsx,js,jsx}',
    schema: 'src/sanity/schema.json',
    generates: 'src/sanity/types.ts',
    formatGeneratedCode: false,
  },
});
