import { defineCliConfig } from 'sanity/cli';

export default defineCliConfig({
  api: {
    projectId: '4whxapdc',
    dataset: 'generate-schema',
  },

  typegen: {
    path: '../../src/**/*.{ts,tsx,js,jsx}',
    schema: './schema.json',
    generates: '../../src/sanity/types.ts',
  },
});
