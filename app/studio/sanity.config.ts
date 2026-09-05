import { colorInput } from '@sanity/color-input';
import { visionTool } from '@sanity/vision';
import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';

import { schemaTypes } from './schemaTypes';

export default defineConfig({
  name: 'default',
  title: 'generate-sanity',
  projectId: '4whxapdc',
  dataset: 'generate-schema',

  plugins: [structureTool(), visionTool(), colorInput()],

  schema: {
    types: schemaTypes,
  },

  typegen: {
    path: '../../src/**/*.{ts,tsx,js,jsx}',
    schema: './schema.json',
    generates: '../../src/sanity/types.ts',
  },
});
