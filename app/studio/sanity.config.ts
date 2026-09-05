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
});
